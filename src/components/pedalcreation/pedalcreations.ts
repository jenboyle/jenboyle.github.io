export const pedalcreationpreviews = [
  {
    title: "First Pedal",
    previewimage: "./images/pedals/pedal1_booster/stencil2.png",
    previewtext: "My first pedal creation - A Booster pedal",
    pedalid: 0,
  },
  {
    title: "Second Pedal",
    previewimage: "./images/pedals/pedal2_killswitch/primed.png",
    previewtext: "My second pedal creation - A Kill Switch pedal",
    pedalid: 1,
  },
];

export const pedalcreations = [
  {
    title: "My first pedal creation - A Booster pedal",
    articles: [
      {
        text: "Holes are drilled",
        images: [{ image: "./images/pedals/pedal1_booster/pedaldrilled.png" }],
      },
      {
        text: "Primer paint on the pedal",
        images: [{ image: "./images/pedals/pedal1_booster/primer.png" }],
      },

      {
        text: "Base coat paint on the pedal",
        images: [{ image: "./images/pedals/pedal1_booster/basecoat.png" }],
      },
      {
        text: "Using a stencil",
        images: [
          { image: "./images/pedals/pedal1_booster/stencil1.png" },
          { image: "./images/pedals/pedal1_booster/stencilpaint.png" },
          { image: "./images/pedals/pedal1_booster/stencil2.png" },
        ],
      },
    ],
  },

  {
    title: "Second pedal creation - A Kill Switch pedal",
    articles: [
      {
        text: "Holes are drilled",
        images: [{ image: "./images/pedals/pedal2_killswitch/drilled.png" }],
      },

      {
        text: "Pedal sanded",
        images: [{ image: "./images/pedals/pedal2_killswitch/sanded.png" }],
      },

      {
        text: "Pedal Primed",
        images: [{ image: "./images/pedals/pedal2_killswitch/primed.png" }],
      },

      {
        text: "Pedal components, I need to resolder a couple connections, going to do it in place",
        images: [
          { image: "./images/pedals/pedal2_killswitch/ks_soldered.png" },
        ],
      },
    ],
  },
];
