export const pedalcreationpreviews = [
  {
    title: "Kappa Seven Pedal",
    previewimage: "./images/pedals/pedal1_killswitch/ks.png",
    previewtext: "My first pedal creation - A Kill Switch pedal",
    pedalid: 0,
  },
  {
    title: "Aversion Pedal",
    previewimage: "./images/pedals/pedal2_booster/aversion.png",
    previewtext: "My second pedal creation - A Booster pedal",
    pedalid: 1,
  },
];

export const pedalcreations = [
  {
    title: "Kappa Seven pedal - A Kill Switch pedal",
    articles: [
      {
        text: "Holes are drilled, pedal sanded and primed",
        images: [
          { image: "./images/pedals/pedal1_killswitch/drilled.png" },
          { image: "./images/pedals/pedal1_killswitch/sanded.png" },
          { image: "./images/pedals/pedal1_killswitch/primed.png" },
        ],
      },

      {
        text: "Pedal components, I need to resolder a couple connections, going to do it in place",
        images: [
          { image: "./images/pedals/pedal1_killswitch/ks_soldered.png" },
          { image: "./images/pedals/pedal1_killswitch/ks_inside.png" },
        ],
      },
      {
        text: "Pedal complete",
        images: [
          { image: "./images/pedals/pedal1_killswitch/ks_side.png" },
          { image: "./images/pedals/pedal1_killswitch/ks.png" },
        ],
      },
    ],
  },
  {
    title: "Aversion pedal - A Booster pedal",
    articles: [
      {
        text: "Holes drilled, then primer and base coat paint",
        images: [
          { image: "./images/pedals/pedal2_booster/pedaldrilled.png" },
          { image: "./images/pedals/pedal2_booster/primer.png" },
          { image: "./images/pedals/pedal2_booster/basecoat.png" },
        ],
      },

      {
        text: "Using a stencil",
        images: [
          { image: "./images/pedals/pedal2_booster/stencil1.png" },
          { image: "./images/pedals/pedal2_booster/stencilpaint.png" },
          { image: "./images/pedals/pedal2_booster/stencil2.png" },
        ],
      },
      {
        text: "Text and top coat",
        images: [{ image: "./images/pedals/pedal2_booster/aversion.png" }],
      },
      {
        text: "Aligning Components",
        images: [
          { image: "./images/pedals/pedal2_booster/pcb1.png" },
          { image: "./images/pedals/pedal2_booster/pcb2.png" },
        ],
      },
      {
        text: "Soldering and adding board wires",
        images: [
          { image: "./images/pedals/pedal2_booster/pcb3.png" },
          { image: "./images/pedals/pedal2_booster/pcb4.png" },
        ],
      },
      {
        text: "Arranging the inside",
        images: [
          { image: "./images/pedals/pedal2_booster/inside1.png" },
          { image: "./images/pedals/pedal2_booster/inside2.png" },
        ],
        description:
          "Something is not right, pedal is dead💀. I tested the LED and resoldered some loose components but I might need to start again from scratch!",
      },
    ],
  },
];
