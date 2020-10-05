import type { Animation } from './mod.ts';

export default <{ [key: string]: Animation }> {
  dots: {
    interval: 80,
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
  },
};
