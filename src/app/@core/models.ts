
export interface EssentialData {
    prop1: string;
    prop2: boolean;
    prop3: OurLiteralSting;
    prop4: string[];
    prop5: { [key: string]: any }
  }
  
  export type OurLiteralSting = 'male' | 'female';
