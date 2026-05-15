import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LandingExperience from "../src/components/landing/LandingExperience.vue";
import * as landingCopy from "../src/content";

function mountLanding() {
  return mount(LandingExperience);
}

describe("LandingExperience", () => {
  it("renders the hero copy", () => {
    const wrapper = mountLanding();

    expect(wrapper.text()).toContain("We built the TMS we couldn’t find.");
    expect(wrapper.text()).toContain("What we built");
    expect(wrapper.text()).toContain("Built in Nashville, TN");
    expect(wrapper.text()).not.toContain("Know which shipments need attention first");
    expect(wrapper.text()).not.toContain(
      "Cover more shipments with the fleet you already have"
    );
    expect(wrapper.text()).not.toContain("Turn daily counts into load lists");
    expect(wrapper.text()).toContain("HOS, GPS, and trip data — on the dispatch.");
    expect(wrapper.text()).toContain("Live freight, scored against your fleet.");
    expect(wrapper.text()).toContain("Invoice-ready freight, posted to your books.");
    expect(wrapper.text()).toContain("Money flows tied to the haul that earned them.");
    expect(wrapper.text()).toContain("Bolt Driver App");
    expect(wrapper.text()).toContain("Why Bolt?");
    expect(wrapper.text()).toContain("Three ways teams buy TMS software");
    expect(wrapper.text()).toContain("support@boltsystem.com");
    expect(wrapper.text()).toContain("TriumphPay");
    expect(wrapper.text()).not.toContain(
      "QuickBooks Online (accounting) and Samsara (telematics) are among the first native connectors"
    );
    expect(wrapper.text()).not.toContain("Built in the US");
    expect(wrapper.text()).not.toContain("Live Workspace");
    expect(wrapper.text()).not.toContain("Verizon Connect");
    expect(wrapper.text()).not.toContain("v0.42");
  });

  it("defaults the app preview to the dashboard", () => {
    const wrapper = mountLanding();

    expect(wrapper.find('[data-test="landing-dashboard"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="landing-shipments"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="landing-preview-url"]').text()).toBe(
      "app.bolttms.com/dashboard"
    );
    expect(wrapper.find("#landing-top").classes()).toContain("landing-light");
    expect(wrapper.find('[data-test="landing-sidebar-settings"]').exists()).toBe(
      false
    );
  });

  it("toggles light/dark mode via the theme button", async () => {
    const wrapper = mountLanding();

    // Light is the default.
    expect(wrapper.find("#landing-top").classes()).toContain("landing-light");

    await wrapper
      .find('[aria-label="Switch landing page to dark mode"]')
      .trigger("click");

    expect(wrapper.find("#landing-top").classes()).toContain("landing-dark");
    expect(
      wrapper.find('[aria-label="Switch landing page to light mode"]').exists()
    ).toBe(true);

    await wrapper
      .find('[aria-label="Switch landing page to light mode"]')
      .trigger("click");

    expect(wrapper.find("#landing-top").classes()).toContain("landing-light");
  });

  it("switches between dashboard, shipments, shipment detail, and invoicing via the sidebar", async () => {
    const wrapper = mountLanding();

    // Dashboard is default.
    expect(wrapper.find('[data-test="landing-dashboard"]').exists()).toBe(true);

    // Sidebar -> Shipments.
    await wrapper
      .find('[data-test="landing-sidebar-shipments"]')
      .trigger("click");
    expect(wrapper.find('[data-test="landing-shipments"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="landing-sidebar-shipments"]').text()).toContain(
      "Shipments"
    );
    expect(wrapper.find('[data-test="landing-trips"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="landing-trips-kanban"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="landing-dashboard"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="landing-preview-url"]').text()).toBe(
      "app.bolttms.com/shipments"
    );

    // Click a shipment row -> Shipment detail.
    await wrapper
      .find('[data-test="landing-shipment-row-SHP-91"]')
      .trigger("click");
    expect(wrapper.find('[data-test="landing-shipment-detail"]').exists()).toBe(
      true
    );
    expect(wrapper.find('[data-test="landing-preview-url"]').text()).toBe(
      "app.bolttms.com/shipments/SHP-91"
    );

    // Sidebar -> Trips.
    await wrapper.find('[data-test="landing-sidebar-trips"]').trigger("click");
    expect(wrapper.find('[data-test="landing-trips"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="landing-trips-kanban"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="landing-trips"]').text()).toContain(
      "Next best move · TRP-36"
    );
    expect(wrapper.find('[data-test="landing-trips"]').text()).toContain("Filters");
    expect(wrapper.find('[data-test="landing-shipments"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="landing-preview-url"]').text()).toBe(
      "app.bolttms.com/dispatch"
    );

    // Sidebar -> Invoicing.
    await wrapper
      .find('[data-test="landing-sidebar-invoicing"]')
      .trigger("click");
    expect(wrapper.find('[data-test="landing-invoicing"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="landing-preview-url"]').text()).toBe(
      "app.bolttms.com/invoicing"
    );
  });

  it("returns from shipment detail to the shipments list via the back control", async () => {
    const wrapper = mountLanding();

    await wrapper
      .find('[data-test="landing-sidebar-shipments"]')
      .trigger("click");
    await wrapper
      .find('[data-test="landing-shipment-row-SHP-91"]')
      .trigger("click");
    expect(wrapper.find('[data-test="landing-shipment-detail"]').exists()).toBe(
      true
    );

    await wrapper
      .find('[data-test="landing-shipment-back"]')
      .trigger("click");

    expect(wrapper.find('[data-test="landing-shipments"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="landing-shipment-detail"]').exists()).toBe(
      false
    );
    expect(wrapper.find('[data-test="landing-preview-url"]').text()).toBe(
      "app.bolttms.com/shipments"
    );
  });

  it("renders self-serve CTAs that point at the register app, not a demo form", () => {
    const wrapper = mountLanding();

    const registerLinks = wrapper
      .findAll("a")
      .filter((anchor) =>
        (anchor.attributes("href") || "").includes(
          "app.bolttms.com/register?step=registration"
        )
      );

    expect(registerLinks.length).toBeGreaterThanOrEqual(1);

    const ctaText = registerLinks.map((anchor) => anchor.text()).join(" | ");
    expect(ctaText.toLowerCase()).not.toMatch(/demo/);

    // The page must not still expose the old demo form.
    expect(wrapper.find("#demo").exists()).toBe(false);
    expect(wrapper.find("form.demo-form").exists()).toBe(false);
  });

  it("exposes the marketing copy required by the landing experience", () => {
    const requiredKeys = [
      "heroStats",
      "capabilities",
      "featuredIntegrations",
      "integrationHandoffs",
      "partnerRoadmap",
      "testimonials",
      "footerColumns",
    ];

    for (const key of requiredKeys) {
      expect(landingCopy, `expected export "${key}"`).toHaveProperty(key);
      const value = (landingCopy as Record<string, unknown>)[key];
      expect(Array.isArray(value)).toBe(true);
      expect((value as unknown[]).length).toBeGreaterThan(0);
    }

    // Spot-check shape of a couple of entries — these survive renames because we
    // walk the imported value, not the file path.
    const heroStat = (landingCopy.heroStats as Array<Record<string, unknown>>)[0];
    expect(heroStat).toHaveProperty("label");
    expect(heroStat).toHaveProperty("value");

    const capability = (landingCopy.capabilities as Array<Record<string, unknown>>)[0];
    expect(capability).toHaveProperty("label");
    expect(capability).toHaveProperty("title");
    expect(capability).toHaveProperty("description");
  });
});
