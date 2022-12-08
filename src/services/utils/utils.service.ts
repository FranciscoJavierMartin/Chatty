import { avatarColors } from '@/services/utils/static.data';

export class Utils {
  static getRamdomAvatarColor(): string {
    return avatarColors[Math.floor(Math.random() * avatarColors.length)];
  }

  static generateAvatar(
    text: string,
    backgroundColor: string,
    foregroundColor = 'white',
  ): string {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 200;
    canvas.height = 200;

    if (context) {
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw text
      context.font = 'normal 80px sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, canvas.width / 2, canvas.height / 2);
    }

    return canvas.toDataURL('base64');
  }
}
