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
    mindwell: TestData;
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
      subtitle: "Unlock your genetic code for personalized health insights",
      description: "Choose your path to optimized health with our specialized genetic testing for men, women, and children."
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
        mindwell: {
          name: "MindWell®",
          focusArea: "Cognitive Health, Mood & Sexual Confidence",
          benefits: [
            "Mood & Motivation: Identifies genetic markers tied to mood regulation, focus, and mental drive helping men overcome fatigue, low motivation, or stress that often impacts relationships.",
            "Sexual Performance & Confidence: Reveals how stress and sleep cycles affect testosterone levels, libido, and sexual stamina. Many clients report improved intimacy and stronger sexual relationships after addressing genetic imbalances with nutrition and lifestyle changes.",
            "Mental Resilience: Improves stress management, reducing anxiety that may interfere with sexual performance, work, energy, or mood."
          ],
          bestFor: "Best for men wanting to sharpen focus, balance mood, and restore confidence in their personal, professional and sexual lives."
        },
        maxrx: {
          name: "Max Rx®",
          focusArea: "Nutrition, Hormones & Body Optimization",
          benefits: [
            "Hormonal Balance: Shows how your body metabolizes testosterone and other hormones, directly tied to libido, erectile function, and fertility.",
            "Sexual Wellness Through Nutrition: Identifies nutrient deficiencies (zinc, vitamin D, folate, magnesium) that often drive low testosterone, poor performance, or lack of stamina — allowing these issues to be corrected naturally.",
            "Weight Loss & Muscle Building: Provides insights into how your body responds to carbs, fats, and proteins, helping you achieve your dream body through personalized diet and supplementation.",
            "Medication & Therapy Response: Offers data on how your body processes medications or hormone therapies, ensuring safer and more effective results if needed."
          ],
          bestFor: "Best for men focused on weight loss, muscle building, hormone health, and restoring sexual vitality."
        },
        thrive: {
          name: "Thrive®",
          focusArea: "Fitness, Longevity & Physical Performance",
          benefits: [
            "Muscle Growth & Strength: Identifies muscle fiber type, recovery ability, and endurance potential — helping you maximize workouts for size, strength, and definition.",
            "Metabolic Health & Weight Control: Reveals genetic tendencies for fat storage and metabolism, making it easier to shed weight and maintain lean muscle mass.",
            "Sexual Vitality & Longevity: Detects cardiovascular and metabolic factors that impact blood flow, stamina, and sexual performance, allowing men to sustain health and confidence into later years.",
            "Overall Vitality: Supports energy, sleep, and resilience — the foundation for a satisfying sex life and high-performance lifestyle."
          ],
          bestFor: "Best for men who want to transform their physique, improve recovery, and maintain vitality for the gym, boardroom and the bedroom."
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
            testName: "MindWell®",
            focusArea: "Cognitive Health, Mood, Work Performance & Sexual Confidence",
            keyBenefits: [
              "Improves focus, memory & motivation",
              "Identifies stress & sleep factors affecting testosterone and libido",
              "Reduces anxiety that interferes with work and sexual performance",
              "Supports stronger relationships through mood balance"
            ],
            bestFor: "Men seeking mental sharpness, mood stability, and restored sexual confidence"
          },
          {
            testName: "Max Rx®",
            focusArea: "Nutrition, Hormones & Body Optimization",
            keyBenefits: [
              "Reveals nutrient deficiencies tied to low testosterone, brain fog, erectile health, and stamina",
              "Custom diet for weight loss and lean muscle growth",
              "Identifies hormone metabolism for more effective HRT or natural optimization",
              "Provides detailed medication response insights for safer and more effective care"
            ],
            bestFor: "Men focused on nutrition, muscle building, medication details, mental health awareness such as ADD, ADHD, Depression and Anxiety and achieving their dream body"
          },
          {
            testName: "Thrive®",
            focusArea: "Fitness, Longevity & Physical Performance",
            keyBenefits: [
              "Maps muscle fiber type, recovery, and endurance for faster strength gains",
              "Reveals fat storage and metabolism patterns for sustainable weight control",
              "Highlights cardiovascular markers tied to sexual stamina and blood flow",
              "Supports long-term energy, vitality, and confidence"
            ],
            bestFor: "Men aiming for peak physical performance, body transformation, and lasting sexual health"
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
        mindwell: {
          name: "MindWell®",
          focusArea: "Cognitive Health, Stress & Hormonal Balance",
          benefits: [
            "Focus & Emotional Clarity: Understand how genetics influence concentration, multitasking, and emotional regulation — especially helpful during hormonal shifts.",
            "Sleep & Stress: Discover how your body handles stress and circadian rhythms, which can be disrupted during menstrual cycles, pregnancy, or menopause.",
            "Hormonal Transitions: Provides insights into mood and cognitive health during PMS, postpartum changes, and perimenopause."
          ],
          bestFor: "Ideal for women managing stress, mood swings, or brain fog linked to cycle phases, pregnancy, or menopause."
        },
        maxrx: {
          name: "Max Rx®",
          focusArea: "Nutrition, Fertility & Hormone Optimization",
          benefits: [
            "Personalized Nutrition: Pinpoints how your body metabolizes key nutrients essential for women — including folate (vital for pregnancy), vitamin D, calcium, and iron.",
            "Menstrual Health: Offers insights into how genetics influence estrogen and progesterone metabolism, which can affect cycle regularity, PMS severity, and overall balance.",
            "Pregnancy & Fertility: Identifies genetic factors tied to reproductive health, egg quality, and nutrient needs for conception and healthy pregnancy outcomes.",
            "Menopause Preparedness: Reveals how your body may respond to shifts in estrogen and hormone replacement therapy, helping you prepare for smoother transitions."
          ],
          bestFor: "Essential for women navigating fertility planning, pregnancy, hormone health, or approaching menopause."
        },
        thrive: {
          name: "Thrive®",
          focusArea: "Longevity, Fitness & Preventative Wellness",
          benefits: [
            "Weight & Metabolism: Uncovers predispositions for fat storage, blood sugar regulation, and metabolism — helping with weight control during cycle fluctuations, aging, pregnancy, and menopause.",
            "Bone & Heart Health: Provides early insights into osteoporosis risk (especially important post-menopause) and cardiovascular markers, which rise as estrogen declines.",
            "Exercise & Recovery: Guides personalized fitness strategies based on endurance, strength, and recovery genetics, ensuring safe and effective activity during each life stage."
          ],
          bestFor: "Designed for women seeking to manage weight, protect bone health, stay active, and extend vitality through every phase of womanhood."
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
            testName: "MindWell®",
            focusArea: "Cognitive Health & Emotional Balance",
            keyBenefits: [
              "Supports focus, memory & mental clarity",
              "Identifies stress & mood regulation patterns across menstrual cycles",
              "Provides insight into cognitive changes during pregnancy, postpartum, and menopause"
            ],
            bestFor: "Women seeking better stress control, emotional resilience, and mental sharpness throughout hormonal changes"
          },
          {
            testName: "Max Rx®",
            focusArea: "Nutrition, Hormones & Fertility",
            keyBenefits: [
              "Reveals nutrient metabolism (iron, vitamin D, folate, calcium) crucial for women's health",
              "Offers insights into cycle regulation, PMS severity, and hormone balance",
              "Identifies fertility & pregnancy-related genetic markers",
              "Provides data on menopause readiness and response to HRT"
            ],
            bestFor: "Women focused on fertility planning, pregnancy health, menstrual wellness, or menopause preparation"
          },
          {
            testName: "Thrive®",
            focusArea: "Fitness, Longevity & Preventative Care",
            keyBenefits: [
              "Maps metabolism, fat storage, and weight tendencies across life stages",
              "Highlights genetic risks for osteoporosis and heart health (critical post-menopause)",
              "Optimizes exercise, endurance, and recovery strategies",
              "Supports healthy aging through cycle changes and beyond"
            ],
            bestFor: "Women who want to maintain vitality, manage weight, and prevent long-term health risks"
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
        mindwell: {
          name: "MindWell®",
          focusArea: "Learning, Behavior & Mental Health",
          benefits: [
            "Focus & Attention: Identifies genetic markers connected to ADD and ADHD, giving parents insight into whether learning or concentration challenges are biologically driven, and how to correct them naturally.",
            "Emotional Wellness: Provides information on predispositions to anxiety, depression, or mood swings, helping parents intervene early with supportive strategies.",
            "Neurodevelopmental Insights: Screens for genetic factors tied to autism spectrum traits and cognitive processing, guiding customized educational, nutritional and lifestyle approaches.",
            "Addiction Awareness: Helps identify potential risks for addictive tendencies later in life, allowing parents to teach healthy coping strategies from a young age."
          ],
          bestFor: "Instead of rushing toward medication, parents can use science-based nutrition, supplements, and lifestyle changes to help balance brain chemistry naturally — sometimes reducing or preventing the need for pharmaceuticals altogether."
        },
        maxrx: {
          name: "Max Rx®",
          focusArea: "Nutrition, Growth & Medical Response",
          benefits: [
            "Targeted Nutrition for Mental Health: Identifies deficiencies in vitamins (like folate, B12, vitamin D, magnesium, and omega-3s) that are often linked to attention issues, anxiety, and depression.",
            "Medication Response: Provides critical insights into how your child metabolizes medications if they are ever prescribed for ADD, ADHD, or mood disorders — helping doctors personalize care.",
            "Digestive & Food Sensitivities: Highlights potential intolerances that may contribute to behavioral or emotional difficulties through gut-brain connection issues."
          ],
          bestFor: "This test is key for using food and nutrition as medicine — giving parents actionable ways to support mental wellness naturally."
        },
        thrive: {
          name: "Thrive®",
          focusArea: "Growth, Fitness & Long-Term Wellness",
          benefits: [
            "Energy & Metabolic Health: Shows how genetics may affect blood sugar and energy regulation, which are often tied to hyperactivity, irritability, and mood swings.",
            "Physical Activity Match: Identifies which sports or activities best fit your child's body type — helping with focus, self-confidence, and emotional stability.",
            "Preventative Mental Health: Provides long-term insight into genetic risks for conditions like addiction, depression, or stress disorders, allowing families to build resilience through lifestyle design."
          ],
          bestFor: "This test empowers parents to guide their children toward healthy habits that not only shape their body, but also support long-term emotional and mental well-being."
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
            testName: "MindWell®",
            focusArea: "Learning, Behavior & Mental Health",
            keyBenefits: [
              "Identifies genetic markers tied to ADD, ADHD, autism, anxiety, depression & addiction risk",
              "Provides insights into focus, memory, sleep, and emotional balance",
              "Helps parents explore non-medication solutions such as nutrition, supplementation, and lifestyle adjustments"
            ],
            bestFor: "Parents wanting to better understand and support a child's learning, attention, mood, or behavior"
          },
          {
            testName: "Max Rx®",
            focusArea: "Nutrition, Growth & Medical Response",
            keyBenefits: [
              "Reveals how your child metabolizes vitamins & minerals (B12, folate, vitamin D, iron, omega-3s) often linked to mental health",
              "Identifies potential food sensitivities that can affect mood and focus",
              "Provides guidance on how your child may respond to medications if ever needed"
            ],
            bestFor: "Families looking to optimize diet, growth, and safe medical care, while exploring nutrition-based support for emotional and behavioral wellness"
          },
          {
            testName: "Thrive®",
            focusArea: "Growth, Fitness & Long-Term Wellness",
            keyBenefits: [
              "Maps metabolism, energy, and recovery for healthy growth",
              "Guides sports and activity choices to improve confidence, focus, and emotional stability",
              "Detects long-term risks for addiction, depression, or stress-related disorders to build resilience early"
            ],
            bestFor: "Parents who want to raise strong, active kids with a foundation for lifelong physical and mental health"
          }
        ]
      }
    }
  }
};
