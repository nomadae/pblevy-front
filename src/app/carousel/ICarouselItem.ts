export interface ICarouselItem {
  id: number;
  title?: {
    first: string;
    second: string;
  };
  subltitle?: string;
  image: string;
  order?: number;
  marginLeft?: number;
}
