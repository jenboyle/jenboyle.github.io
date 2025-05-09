export const cubaseTips = [
  {
    topic: "Tools",
    tips: [
      { tip: "Numbers equate to the tools 1-9" },
      {
        tip: "Snap on or off, default is Bar, can be set to Grid, Beat, Quantize",
      },
      {
        tip: "Shift or ctrl cmd clicking select multiple events or click and drag from empty area over events",
      },
      {
        tip: "Drag copies hover alt option click and drag. Hold shift also to make shared copy",
      },
      {
        tip: "Resize event smaller hover event handles appear square boxes click drag left right, hold alt option while dragging right handle for event repeats",
      },
      { tip: "Event repeats can be independently changed" },
      {
        tip: "Shared repeats all change if one edited. How - same as event repeats but also hold down shift (they show = icon)",
      },
      {
        tip: "Select a vertical range across events then delete or click and drag or hold alt while dragging to create a copy",
      },
      {
        tip: "Split tool can also use vertically - select first by shift click",
      },
      { tip: "Ctrl command a - to select all events" },
      {
        tip: "Glue tool put back together left to right - glue next event to the right one track at a time",
      },
      {
        tip: "Erase tool - if hold alt option erases to right but leaves clicked",
      },
      { tip: "Zoom tool click drag" },
      { tip: "Mute tool multiple shift click" },
      {
        tip: "Play tool click hold starts play from click only click event plays. Click and drag left right to scrub",
      },
      { tip: "Color tool select then click event to paint" },
      {
        tip: "Top left - Window Layout - turn on Status, info and overview lines",
      },
      {
        tip: "Project Setup Window - 30fps, bars beats, 44.1, 32 bit, wave, equal power",
      },
      {
        tip: "When using info line making changes for multiple values you can hold ctrl/cmd to edit all if it is only editing one",
      },
      {
        tip: "Horizontal Zoom - click hold on time ruler and drag up zoom out (or G) or down to zoom in (or H), hold shift to lock",
      },
      {
        tip: "Vertical Zoom - Zoom Slider for all tracks or use zoom tool or resize track on left at the bottom. Ctrl/cmd for all, or select multiple then adjust one",
      },
      { tip: "Check out the Zoom commands from the edit menu" },
      { tip: "Event zoom slider to magnify audio event" },
    ],
  },
  {
    topic: "Editing Audio",
    tips: [
      {
        tip: "Volume handle - middle of event - top small box drag up or down",
      },
      {
        tip: "Fade handles for fade in and out - drag them in from the beginning or end",
      },
      { tip: "Event envelope - top of event - add volume changes with points" },
      {
        tip: "Crossfade to smooth joining audio events left to right (pops, clicks etc). Increase track height.  Disable snap by J or ctrl cmd drag left handle of right audio over end of left event. Then shift click the both events and type X or select crossfade.",
      },
      {
        tip: "VariAudio, Pitch and Warp, drag segments, select segments, straighten pitch slider halfway, lengthen segments. As a whole: select segments, quantize pitch halfway and use straighten pitch slider halfway, both all to right for autotune effect",
      },
    ],
  },

  {
    topic: "Mixing",
    tips: [
      {
        tip: "For mixing set the audio interface buffer high in the control panel on device eg 1024 or 2048, (recording next project set to low eg 128 or 384 if hear pops and clicks)",
      },
      {
        tip: "Volume in channel Fader",
      },
      {
        tip: "Pan hearing in left or right",
      },
      {
        tip: "EQ",
      },
      {
        tip: "Accessing Mixer - inspector or edit (L->R inserts, equalizers, sends, channel fader) or devices menu mixer )",
      },
    ],
  },

  {
    topic: "Inserts, Sends, FX Channels",
    tips: [
      {
        tip: "Inserts are plugins that alter volume e.g. Distortion, Dynamics, EQ, Filter, Pitch Shift, Spatial Panner, Surround, Tools, Mastering",
      },
      { tip: "Sends are plugins that provide spatial effects" },
      { tip: "Modulation - Insert or Send" },
      {
        tip: "If there is a mix control in the plugin panel it can be used on Insert or Send. Insert mix of dry wet, Send 100% wet",
      },
      { tip: "Delay, Modulation, Reverb best as Sends" },
      { tip: "Sends - one plugin can be used for several tracks" },
      {
        tip: "Compressor - use presets such as guitar on guitar tracks and vocal preset on vocal tracks - can disable make-up and set manually if too loud, can disable auto and set make-up to 9 if too low volume. Can disable live for smoother transitions",
      },
      { tip: "Add Modulation Chorus to bass track and select preset" },
      {
        tip: "Compressors should come before spatials like chorus and the insert order can be changed by dragging to empty slot, hold option also to make a copy",
      },
      { tip: "Remove the plugin by clicking the slot and picking No Effect" },
    ],
  },

  {
    topic: "Mastering",
    tips: [
      {
        tip: "Import an audio track. Click on the audio event - Select statistics from Audio menu - note Maximum RMS and average - Good value is between -10dB to -15db",
      },
      {
        tip: "Signal flows in mixer left to right, audio and instrument, groups, FX to Master Fader",
      },
      {
        tip: "Click Master Fader edit. Inserts is where you apply mastering plugins, EQ for tonality, inserts 7 and 8 are after master fader",
      },
      { tip: "Adjust master fader level volume of mixdown" },
      {
        tip: "Master fader big number channel level, small number peak meter value (loudest volume during playback)",
      },
      {
        tip: "Peak meter value above zero indicates clipping. Zero is max output level. -1 appropriate, -10 too quiet, click to reset to infinity and playback the whole track to get peak meter value",
      },
      {
        tip: "Adjust master fader volume BEFORE mastering by moving up or down or by input gain controls. set master fader 0.00dB, play whole, determine peak meter value, enter opposite into input gain value. eg PMV +0.9, then enter -1.0 or -1.1 so it has a little safety margin",
      },
      {
        tip: "Listen to the track on both good quality earphones and good quality speakers",
      },
      {
        tip: "Insert slot 1, apply Dynamics - Compression - apply a preset or reset preset, output at 0dB. Hear the difference by bypass toggle. Compression smoothing between loud and quiet - MultibandCompressor, Compressor",
      },
      {
        tip: "EQ curve add 4 points like: eq1: Low Parametric II 3 72Hz 0.0, eq2: Low Mids Parametric I -2 250Hz 0.7, eq3: High Mids Parametric I 3.4 3571Hz 0.7, eq4: Highs High Shelf I -2 14000Hz 0 (Don't need a plugin). EQ high frequencies and tonal clarity - Master Fader",
      },
      {
        tip: "Insert slot 7, apply Dynamics - Maximizer. Set output to -0.2dB. Soft clip off for loud or on for gentle limiting. Optimize default is 25.0 - experiment maybe up to 30. Use bypass toggle to compare before and after. Limiter limit peak volumes - Maximizer",
      },
    ],
  },
];
