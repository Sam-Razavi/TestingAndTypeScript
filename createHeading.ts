export const createHeading = (text: string, level: number): string => {
    if (level < 1 || level > 6) {
      return 'Invalid heading level';
    }

    const escapedText = text.replace(/&/g, '&amp;')
                             .replace(/</g, '&lt;')
                             .replace(/>/g, '&gt;');

    return `<h${level}>${escapedText.trim()}</h${level}>`;
  };
