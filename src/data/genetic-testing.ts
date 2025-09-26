// Genetic Testing Data Structure
export interface TestData {
  name: string;
  focusArea: string;
  benefits: string[];
  bestFor: string;
}

export interface AudienceData {
  hero: {
    title: string;
    intro: string;
    image?: string;
  };
  tests: {
    clear: TestData;
    maxrx: TestData;
    thrive: TestData;
  };
  benefits: string[];
  proTip: string;
  comparison: {
    headers: string[];
    rows: {
      testName: string;
      focusArea: string;
      keyBenefits: string[];
      bestFor: string;
    }[];
  };
}

export const geneticTestingData = {
  // Landing page content
  landing: {
    hero: {
      title: "Genetic Testing",
      subtitle: "Unlock your genetic code with 1,000+ markers and 55% performance boost",
      description: "Discover your unique genetic blueprint with our comprehensive testing suite. Since genetics don't change, this is a one-time investment that provides lifelong insights. We recommend our complete bundle of Max Rx®, Thrive, and Clear tests with 12-week coaching for optimal results."
    },
    audienceCards: {
      men: {
        title: "For Men",
        teaser: "Optimize performance, confidence & vitality",
        highlights: ["Sexual Wellness", "Body Transformation", "Peak Performance"],
        icon: "/menicon.png"
      },
      women: {
        title: "For Women", 
        teaser: "Support for every stage of womanhood",
        highlights: ["Hormonal Balance", "Fertility Support", "Menopause Readiness"],
        icon: "/womenicon.png"
      },
      children: {
        title: "For Children",
        teaser: "Science-based path to health & wellness", 
        highlights: ["Learning Support", "Behavioral Insights", "Natural Solutions"],
        icon: "/child.png"
      }
    }
  },

  // Audience-specific content
  audiences: {
    men: {
      hero: {
        title: "Genetic Testing for Men: Optimize Performance, Confidence & Vitality",
        intro: "At Bio Hacking Luxe, we help men unlock their genetic code to achieve peak health and performance. With our proprietary swab kits, you'll gain powerful insights into how your body responds to nutrition, exercise, hormones, and recovery. These tests don't just improve physical health — they enhance sexual wellness, mood, energy, and confidence, often transforming both personal well being and relationships."
      },
      tests: {
        clear: {
          name: "Clear",
          focusArea: "Skin Genetics & Aging Insights",
          benefits: [
            "Personalized Skincare Routine: Discover which ingredients work best for your unique skin genetics, avoiding harmful products and optimizing your daily routine.",
            "Aging Prevention: Identify genetic factors that accelerate aging and learn how to slow down the process with targeted treatments and lifestyle changes.",
            "Root Cause Analysis: Understand the underlying genetic causes of skin issues like acne, sensitivity, and premature aging rather than just treating symptoms.",
            "Medical-Grade Products: Access to professional skincare products specifically chosen based on your genetic profile for maximum effectiveness."
          ],
          bestFor: "Best for men who want to maintain youthful, healthy skin and understand their unique skincare needs based on genetics."
        },
        maxrx: {
          name: "Max Rx®",
          focusArea: "Mental Health & Medication Optimization",
          benefits: [
            "Mental Health Disorders: Identifies genetic predispositions for depression, anxiety, bipolar disorder, ADHD, OCD, PTSD, schizophrenia, substance struggles, and sleep disorders.",
            "Medication Response Analysis: Comprehensive analysis of how you respond to 275+ prescription medications, helping doctors choose the most effective treatments.",
            "Current Medication Review: Detailed analysis of your current medications and their effectiveness based on your genetic profile.",
            "Risk Management Profile: Personalized risk assessment including MTHFR variant analysis and individualized medication dosing guidelines."
          ],
          bestFor: "Best for men seeking comprehensive mental health support and medication optimization based on genetic testing."
        },
        thrive: {
          name: "Thrive®",
          focusArea: "Personalized Nutrition Diagnosis",
          benefits: [
            "Nutrient Needs: Learn your genetically influenced needs for key nutrients and how your body processes different foods.",
            "Dream Body Blueprint: Discover the specific steps to unlock your dream body based on your unique genetic makeup.",
            "Personalized Nutrition Plan: Receive a customized nutrition and medical-grade supplement action plan tailored to your genetics.",
            "Wellness Risk Factors: Understand your genetic risk factors for key wellness areas and how to address them proactively."
          ],
          bestFor: "Best for men who want to optimize their nutrition, achieve their ideal body composition, and understand their metabolic health."
        }
      },
      benefits: [
        "Sexual Wellness Restored: Many men have improved their sex lives and strengthened relationships through nutritional and genetic optimization — without relying solely on medications.",
        "Body Transformation: Targeted insights make weight loss and muscle building faster, smarter, and sustainable.",
        "Mood & Confidence Boost: Balancing genetic factors tied to mood and stress creates lasting improvements in motivation, mental sharpness, and relationships.",
        "Luxury Concierge Support: Personalized protocols designed for peak performance and long-term vitality."
      ],
      proTip: "The most powerful results come when men combine all three tests for a 360° blueprint of sexual health, body transformation, and peak mental/physical performance.",
      comparison: {
        headers: ["Test Name", "Focus Area", "Key Benefits for Men", "Best For"],
        rows: [
          {
            testName: "Clear",
            focusArea: "Skin Genetics & Aging Insights",
            keyBenefits: [
              "Personalized skincare routine based on genetic profile",
              "Identifies harmful ingredients and optimal products for your skin",
              "Root cause analysis of skin issues and aging factors",
              "Access to medical-grade products chosen for your genetics"
            ],
            bestFor: "Men who want to maintain youthful, healthy skin and understand their unique skincare needs"
          },
          {
            testName: "Max Rx®",
            focusArea: "Mental Health & Medication Optimization",
            keyBenefits: [
              "Identifies genetic predispositions for mental health disorders",
              "Analysis of response to 275+ prescription medications",
              "Current medication effectiveness review",
              "Personalized risk management including MTHFR variant analysis"
            ],
            bestFor: "Men seeking comprehensive mental health support and medication optimization"
          },
          {
            testName: "Thrive®",
            focusArea: "Personalized Nutrition Diagnosis",
            keyBenefits: [
              "Learn genetically influenced nutrient needs and food processing",
              "Discover specific steps to unlock your dream body",
              "Receive personalized nutrition and supplement action plan",
              "Understand genetic risk factors for key wellness areas"
            ],
            bestFor: "Men who want to optimize nutrition, achieve ideal body composition, and understand metabolic health"
          }
        ]
      }
    },
    women: {
      hero: {
        title: "Genetic Testing for Women: Clarity Swab Kits for Every Stage of Life",
        intro: "Every woman's body tells a unique story. Our proprietary genetic swab kits decode that story, giving you a personalized health blueprint that supports your well-being from adolescence to menopause. With one simple cheek swab, you'll discover insights that guide your nutrition, hormones, fertility, mental health, and long-term vitality."
      },
      tests: {
        clear: {
          name: "Clear",
          focusArea: "Skin Genetics & Aging Insights",
          benefits: [
            "Personalized Skincare Routine: Discover which ingredients work best for your unique skin genetics, avoiding harmful products and optimizing your daily routine.",
            "Aging Prevention: Identify genetic factors that accelerate aging and learn how to slow down the process with targeted treatments and lifestyle changes.",
            "Root Cause Analysis: Understand the underlying genetic causes of skin issues like acne, sensitivity, and premature aging rather than just treating symptoms.",
            "Medical-Grade Products: Access to professional skincare products specifically chosen based on your genetic profile for maximum effectiveness."
          ],
          bestFor: "Best for women who want to maintain youthful, healthy skin and understand their unique skincare needs based on genetics."
        },
        maxrx: {
          name: "Max Rx®",
          focusArea: "Mental Health & Medication Optimization",
          benefits: [
            "Mental Health Disorders: Identifies genetic predispositions for depression, anxiety, bipolar disorder, ADHD, OCD, PTSD, schizophrenia, substance struggles, and sleep disorders.",
            "Medication Response Analysis: Comprehensive analysis of how you respond to 275+ prescription medications, helping doctors choose the most effective treatments.",
            "Current Medication Review: Detailed analysis of your current medications and their effectiveness based on your genetic profile.",
            "Risk Management Profile: Personalized risk assessment including MTHFR variant analysis and individualized medication dosing guidelines."
          ],
          bestFor: "Best for women seeking comprehensive mental health support and medication optimization based on genetic testing."
        },
        thrive: {
          name: "Thrive®",
          focusArea: "Personalized Nutrition Diagnosis",
          benefits: [
            "Nutrient Needs: Learn your genetically influenced needs for key nutrients and how your body processes different foods.",
            "Dream Body Blueprint: Discover the specific steps to unlock your dream body based on your unique genetic makeup.",
            "Personalized Nutrition Plan: Receive a customized nutrition and medical-grade supplement action plan tailored to your genetics.",
            "Wellness Risk Factors: Understand your genetic risk factors for key wellness areas and how to address them proactively."
          ],
          bestFor: "Best for women who want to optimize their nutrition, achieve their ideal body composition, and understand their metabolic health."
        }
      },
      benefits: [
        "Menstrual Cycle Support: Understand genetic drivers of PMS, cramps, and irregularities.",
        "Pregnancy & Fertility Guidance: Use genetic data to support conception, pregnancy nutrition, and maternal health.",
        "Menopause Readiness: Prepare for hormonal transitions with personalized strategies for bone, heart, and hormone health.",
        "Actionable Data: Science-based, personalized insights — not one-size-fits-all advice."
      ],
      proTip: "These tests are especially powerful when used together during major life transitions — such as fertility planning, pregnancy, postpartum recovery, or menopause — providing clear, science-backed guidance for every stage.",
      comparison: {
        headers: ["Test Name", "Focus Area", "Key Benefits for Women", "Best For"],
        rows: [
          {
            testName: "Clear",
            focusArea: "Skin Genetics & Aging Insights",
            keyBenefits: [
              "Personalized skincare routine based on genetic profile",
              "Identifies harmful ingredients and optimal products for your skin",
              "Root cause analysis of skin issues and aging factors",
              "Access to medical-grade products chosen for your genetics"
            ],
            bestFor: "Women who want to maintain youthful, healthy skin and understand their unique skincare needs"
          },
          {
            testName: "Max Rx®",
            focusArea: "Mental Health & Medication Optimization",
            keyBenefits: [
              "Identifies genetic predispositions for mental health disorders",
              "Analysis of response to 275+ prescription medications",
              "Current medication effectiveness review",
              "Personalized risk management including MTHFR variant analysis"
            ],
            bestFor: "Women seeking comprehensive mental health support and medication optimization"
          },
          {
            testName: "Thrive®",
            focusArea: "Personalized Nutrition Diagnosis",
            keyBenefits: [
              "Learn genetically influenced nutrient needs and food processing",
              "Discover specific steps to unlock your dream body",
              "Receive personalized nutrition and supplement action plan",
              "Understand genetic risk factors for key wellness areas"
            ],
            bestFor: "Women who want to optimize nutrition, achieve ideal body composition, and understand metabolic health"
          }
        ]
      }
    },
    children: {
      hero: {
        title: "Genetic Testing for Children: A Science-Based Path to Health & Wellness",
        intro: "Every parent wants to give their child the best possible start in life. With our proprietary genetic swab kits, you can uncover powerful insights into your child's health, development, and long-term well-being — all from a simple, painless cheek swab. These tests help you understand your child's unique biology, giving you the tools to support them naturally and effectively. Instead of rushing toward medication, parents can use science-based nutrition, supplements, and lifestyle changes to help balance brain chemistry naturally, sometimes reducing or preventing the need for pharmaceuticals altogether."
      },
      tests: {
        clear: {
          name: "Clear",
          focusArea: "Skin Genetics & Early Aging Prevention",
          benefits: [
            "Early Skincare Foundation: Establish proper skincare habits from childhood based on genetic predispositions for skin sensitivity, acne, and aging factors.",
            "Allergy & Sensitivity Prevention: Identify potential skin allergies and sensitivities early to prevent long-term damage and discomfort.",
            "Sun Protection Strategy: Understand your child's genetic response to UV exposure and develop appropriate sun protection measures.",
            "Healthy Skin Habits: Learn which ingredients and products are best for your child's unique skin genetics from an early age."
          ],
          bestFor: "Best for parents who want to establish healthy skincare habits and prevent future skin issues based on their child's genetics."
        },
        maxrx: {
          name: "Max Rx®",
          focusArea: "Mental Health & Medication Optimization",
          benefits: [
            "Mental Health Disorders: Identifies genetic predispositions for depression, anxiety, bipolar disorder, ADHD, OCD, PTSD, schizophrenia, substance struggles, and sleep disorders.",
            "Medication Response Analysis: Comprehensive analysis of how your child responds to 275+ prescription medications, helping doctors choose the most effective treatments.",
            "Current Medication Review: Detailed analysis of your child's current medications and their effectiveness based on genetic profile.",
            "Risk Management Profile: Personalized risk assessment including MTHFR variant analysis and individualized medication dosing guidelines."
          ],
          bestFor: "Best for parents seeking comprehensive mental health support and medication optimization for their children based on genetic testing."
        },
        thrive: {
          name: "Thrive®",
          focusArea: "Personalized Nutrition Diagnosis",
          benefits: [
            "Nutrient Needs: Learn your child's genetically influenced needs for key nutrients and how their body processes different foods.",
            "Growth & Development: Discover the specific nutritional requirements for optimal growth and development based on your child's unique genetic makeup.",
            "Personalized Nutrition Plan: Receive a customized nutrition and supplement action plan tailored to your child's genetics.",
            "Wellness Risk Factors: Understand your child's genetic risk factors for key wellness areas and how to address them proactively."
          ],
          bestFor: "Best for parents who want to optimize their child's nutrition, support healthy growth, and understand their metabolic health."
        }
      },
      benefits: [
        "Early Detection Without Labels – Spot tendencies toward ADD, ADHD, autism, anxiety, or depression before formal diagnoses.",
        "Nutrition Over Medication – Many imbalances can be addressed with targeted nutrition, supplementation, and lifestyle changes based on your child's unique genetics.",
        "Science-Backed Guidance – Reports are delivered in a clear, parent-friendly way with actionable steps, backed by the latest genetic science."
      ],
      proTip: "If your child has been struggling with focus, behavior, or emotional balance, genetic testing may reveal simple nutritional or lifestyle adjustments that can make a world of difference — without relying solely on medications.",
      comparison: {
        headers: ["Test Name", "Focus Area", "Key Benefits for Children", "Best For"],
        rows: [
          {
            testName: "Clear",
            focusArea: "Skin Genetics & Early Aging Prevention",
            keyBenefits: [
              "Establishes proper skincare habits from childhood based on genetic predispositions",
              "Identifies potential skin allergies and sensitivities early",
              "Develops appropriate sun protection strategies based on genetic response to UV",
              "Teaches healthy skin habits with genetics-based ingredient selection"
            ],
            bestFor: "Parents who want to establish healthy skincare habits and prevent future skin issues"
          },
          {
            testName: "Max Rx®",
            focusArea: "Mental Health & Medication Optimization",
            keyBenefits: [
              "Identifies genetic predispositions for mental health disorders",
              "Analysis of response to 275+ prescription medications",
              "Current medication effectiveness review",
              "Personalized risk management including MTHFR variant analysis"
            ],
            bestFor: "Parents seeking comprehensive mental health support and medication optimization for their children"
          },
          {
            testName: "Thrive®",
            focusArea: "Personalized Nutrition Diagnosis",
            keyBenefits: [
              "Learn genetically influenced nutrient needs and food processing",
              "Discover specific nutritional requirements for optimal growth and development",
              "Receive personalized nutrition and supplement action plan",
              "Understand genetic risk factors for key wellness areas"
            ],
            bestFor: "Parents who want to optimize their child's nutrition, support healthy growth, and understand metabolic health"
          }
        ]
      }
    }
  }
};
