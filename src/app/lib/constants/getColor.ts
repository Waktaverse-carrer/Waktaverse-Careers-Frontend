import { standardColor } from '@/app/styles/standard';
import { ColorType, SaturationType } from '@/app/lib/types/colors';

const colorTypes = ['main', 'grey', 'red', 'orange', 'green', 'blue', 'isedol'];

export const getStandardColor = (
  content: string,
  saturation: SaturationType
) => {
  if (!colorTypes.includes(content)) {
    return standardColor.color('main', 500);
  }
  return standardColor.color(content as ColorType, saturation);
};
