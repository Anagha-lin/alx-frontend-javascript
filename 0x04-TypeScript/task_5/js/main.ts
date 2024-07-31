// Define MajorCredits interface with a unique brand
export interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';  // Unique brand property
}

// Define MinorCredits interface with a unique brand
export interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';  // Unique brand property
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',  // Ensure the brand property is set
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',  // Ensure the brand property is set
  };
}

