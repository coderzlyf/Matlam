export const trackDemoView = () => {
    window.gtag("event", "demo_view", {
      event_category: "engagement",
      event_label: "3d_demo",
    });
  };

  export const trackLead = () => {
    window.gtag("event", "generate_lead", {
      event_category: "conversion",
      event_label: "contact_form",
    });
  };

  export const trackCTAClick = () => {
    window.gtag("event", "book_demo_click", {
      event_category: "conversion",
    });
  };

  export const trackCTAClickToRealesto = () => {
    window.gtag("event", "check_realesto", {
      event_category: "conversion",
      event_label: "realesto_redirect",
    });
  };

  export const track3DmodelOne = () => {
    window.gtag("event", "check_modelOne", {
      event_category: "interaction",
      event_label: "modelOne",
    });
  };

  export const track3DmodelTwo = () => {
    window.gtag("event", "check_modelTwo", {
      event_category: "interaction",
      event_label: "modelTwo",
    });
  };
  export const trackPanaroma = () => {
    window.gtag("event", "check_panaroma", {
      event_category: "interaction",
      event_label: "panaroma",
    });
  };