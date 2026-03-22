const organResearch = {
  brain: {
    organId: 'brain',
    name: 'Brain',
    description:
      'The brain is the central organ of the nervous system, weighing about 1.4 kg in adults. It controls thought, memory, emotion, motor skills, vision, breathing, and every process that regulates the body.',
    generalResearch: [
      {
        title: 'Omega-3 fatty acids and cognitive decline',
        summary:
          'A systematic review found that higher omega-3 intake is associated with reduced risk of cognitive decline and dementia, particularly DHA which is a major structural component of the brain.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26890759/',
      },
      {
        title: 'Physical exercise and brain health',
        summary:
          'Regular aerobic exercise increases hippocampal volume and improves memory function. Exercise promotes neurogenesis and enhances synaptic plasticity through BDNF upregulation.',
        source: 'WHO',
        url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
      },
    ],
    conditionResearch: {
      'neurodegenerative-disease': [
        {
          title: 'Dementia and neurodegeneration global burden',
          summary:
            'Over 55 million people live with dementia worldwide, with nearly 10 million new cases annually. Alzheimer\'s disease accounts for 60-70% of cases.',
          source: 'WHO',
          url: 'https://www.who.int/news-room/fact-sheets/detail/dementia',
        },
        {
          title: 'Curcumin and neuroprotection',
          summary:
            'Curcumin demonstrates anti-inflammatory and antioxidant properties that may reduce amyloid plaque accumulation associated with Alzheimer\'s disease.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29350069/',
        },
      ],
    },
    supplements: [
      { name: 'Omega-3 (DHA)', benefit: 'Major structural component of brain cell membranes; supports cognitive function and may slow age-related decline', evidenceLevel: 'Strong', source: 'PubMed PMID: 26890759' },
      { name: 'Lion\'s Mane Mushroom', benefit: 'Stimulates nerve growth factor (NGF) synthesis; may support neuronal health and cognitive function', evidenceLevel: 'Emerging', source: 'PubMed PMID: 24266378' },
      { name: 'Phosphatidylserine', benefit: 'Key phospholipid in neuronal membranes; supplementation may improve memory and attention in older adults', evidenceLevel: 'Moderate', source: 'PubMed PMID: 25933483' },
    ],
    rehabilitationExercises: [],
  },

  heart: {
    organId: 'heart',
    name: 'Heart',
    description:
      'The heart is a muscular organ roughly the size of a fist that pumps blood throughout the body via the circulatory system. It beats approximately 100,000 times per day, delivering oxygen and nutrients to every tissue.',
    generalResearch: [
      {
        title: 'CoQ10 as adjunctive therapy for heart failure',
        summary:
          'The Q-SYMBIO randomized trial demonstrated that long-term CoQ10 supplementation reduced major adverse cardiovascular events by 43% in chronic heart failure patients.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25282031/',
      },
      {
        title: 'Cardiovascular disease global burden',
        summary:
          'Cardiovascular diseases are the leading cause of death globally, taking an estimated 17.9 million lives each year, representing 32% of all global deaths.',
        source: 'WHO',
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
      },
    ],
    conditionResearch: {
      'cardiovascular-disease': [
        {
          title: 'Mediterranean diet and cardiovascular outcomes',
          summary:
            'The PREDIMED trial showed that a Mediterranean diet supplemented with extra-virgin olive oil or nuts reduced the incidence of major cardiovascular events by approximately 30%.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/23432189/',
        },
      ],
      'type-2-diabetes': [
        {
          title: 'Diabetes and cardiovascular risk',
          summary:
            'Type 2 diabetes doubles the risk of cardiovascular disease. Hyperglycemia accelerates atherosclerosis through endothelial dysfunction and chronic inflammation.',
          source: 'NHS',
          url: 'https://www.nhs.uk/conditions/type-2-diabetes/',
        },
      ],
    },
    supplements: [
      { name: 'Coenzyme Q10 (CoQ10)', benefit: 'Supports mitochondrial energy production in cardiac cells; may improve ejection fraction in heart failure', evidenceLevel: 'Strong', source: 'PubMed PMID: 25282031' },
      { name: 'Omega-3 Fatty Acids', benefit: 'Reduce triglycerides and may lower risk of arrhythmias and sudden cardiac death', evidenceLevel: 'Strong', source: 'AHA Scientific Statement' },
      { name: 'Magnesium', benefit: 'Essential for normal heart rhythm; deficiency associated with increased cardiovascular risk', evidenceLevel: 'Moderate', source: 'NHS' },
    ],
    rehabilitationExercises: [],
  },

  lungs: {
    organId: 'lungs',
    name: 'Lungs',
    description:
      'The lungs are a pair of spongy, air-filled organs located on either side of the chest. They facilitate gas exchange, bringing oxygen into the bloodstream and expelling carbon dioxide with each breath.',
    generalResearch: [
      {
        title: 'N-Acetylcysteine (NAC) in COPD management',
        summary:
          'A meta-analysis found that oral NAC reduces the frequency of COPD exacerbations, likely through its mucolytic and antioxidant properties in the airways.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26230487/',
      },
      {
        title: 'Air pollution and respiratory health',
        summary:
          'Ambient air pollution causes 4.2 million premature deaths worldwide annually, primarily through cardiovascular and respiratory disease.',
        source: 'WHO',
        url: 'https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health',
      },
    ],
    conditionResearch: {
      'respiratory-disease': [
        {
          title: 'COPD global burden and management',
          summary:
            'COPD is the third leading cause of death worldwide. Pulmonary rehabilitation and smoking cessation remain the most effective interventions.',
          source: 'WHO',
          url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        },
      ],
      cancer: [
        {
          title: 'Lung cancer screening with low-dose CT',
          summary:
            'The NLST trial demonstrated that low-dose CT screening reduces lung cancer mortality by 20% compared to chest X-ray in high-risk populations.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/21714641/',
        },
      ],
    },
    supplements: [
      { name: 'N-Acetylcysteine (NAC)', benefit: 'Mucolytic and antioxidant; may reduce COPD exacerbation frequency', evidenceLevel: 'Strong', source: 'PubMed PMID: 26230487' },
      { name: 'Vitamin D', benefit: 'Deficiency linked to increased respiratory infections and reduced lung function; supplementation may reduce exacerbations', evidenceLevel: 'Moderate', source: 'PubMed PMID: 28202713' },
    ],
    rehabilitationExercises: [],
  },

  liver: {
    organId: 'liver',
    name: 'Liver',
    description:
      'The liver is the largest internal organ, weighing about 1.5 kg. It performs over 500 vital functions including detoxification, protein synthesis, bile production, and glycogen storage.',
    generalResearch: [
      {
        title: 'Milk thistle (silymarin) and hepatoprotection',
        summary:
          'Silymarin, the active compound in milk thistle, demonstrates hepatoprotective properties through anti-inflammatory, antioxidant, and anti-fibrotic mechanisms.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27517806/',
      },
      {
        title: 'Non-alcoholic fatty liver disease (NAFLD)',
        summary:
          'NAFLD affects approximately 25% of the global population. Weight loss of 7-10% of body weight can resolve steatohepatitis and improve fibrosis.',
        source: 'NHS',
        url: 'https://www.nhs.uk/conditions/non-alcoholic-fatty-liver-disease/',
      },
    ],
    conditionResearch: {
      'liver-disease': [
        {
          title: 'Alcohol-related liver disease prevention',
          summary:
            'Reducing alcohol intake to below 14 units per week significantly lowers the risk of liver cirrhosis. The liver can regenerate if damage is caught early.',
          source: 'NHS',
          url: 'https://www.nhs.uk/conditions/alcohol-related-liver-disease-arld/',
        },
      ],
    },
    supplements: [
      { name: 'Milk Thistle (Silymarin)', benefit: 'Hepatoprotective effects through antioxidant and anti-fibrotic mechanisms', evidenceLevel: 'Moderate', source: 'PubMed PMID: 27517806' },
      { name: 'N-Acetylcysteine (NAC)', benefit: 'Precursor to glutathione; supports liver detoxification pathways', evidenceLevel: 'Strong', source: 'NHS Clinical Guidelines' },
      { name: 'Alpha-Lipoic Acid', benefit: 'Antioxidant that may protect hepatocytes from oxidative stress', evidenceLevel: 'Emerging', source: 'PubMed PMID: 28899205' },
    ],
    rehabilitationExercises: [],
  },

  stomach: {
    organId: 'stomach',
    name: 'Stomach',
    description:
      'The stomach is a muscular, hollow organ that holds food while it is being mixed with gastric enzymes. It secretes hydrochloric acid and pepsin to break down proteins as part of the digestive process.',
    generalResearch: [
      {
        title: 'Probiotics and gastric health',
        summary:
          'Probiotic supplementation, particularly with Lactobacillus and Bifidobacterium strains, can improve gastric mucosal health and assist in H. pylori eradication therapy.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25267790/',
      },
      {
        title: 'Helicobacter pylori and gastric disease',
        summary:
          'H. pylori infects approximately half the world\'s population and is the primary risk factor for gastric ulcers and gastric cancer.',
        source: 'WHO',
        url: 'https://www.who.int/news-room/fact-sheets/detail/helicobacter-pylori',
      },
    ],
    conditionResearch: {
      cancer: [
        {
          title: 'Gastric cancer prevention strategies',
          summary:
            'H. pylori eradication reduces gastric cancer risk by 33-47%. A diet rich in fruits and vegetables is associated with lower risk.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25735069/',
        },
      ],
    },
    supplements: [
      { name: 'Probiotics', benefit: 'Support gastric mucosal health and assist in H. pylori eradication when combined with standard therapy', evidenceLevel: 'Strong', source: 'PubMed PMID: 25267790' },
      { name: 'Zinc-Carnosine', benefit: 'May protect gastric mucosa and accelerate healing of gastric ulcers', evidenceLevel: 'Moderate', source: 'PubMed PMID: 17151381' },
    ],
    rehabilitationExercises: [],
  },

  pancreas: {
    organId: 'pancreas',
    name: 'Pancreas',
    description:
      'The pancreas is a glandular organ behind the stomach that produces insulin and glucagon to regulate blood sugar, as well as digestive enzymes that help break down food in the small intestine.',
    generalResearch: [
      {
        title: 'Chromium and insulin sensitivity',
        summary:
          'Chromium picolinate supplementation may improve insulin sensitivity and glycemic control in individuals with type 2 diabetes, though results vary across studies.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/17519436/',
      },
      {
        title: 'Pancreatic function and diabetes',
        summary:
          'Progressive beta-cell dysfunction is the hallmark of type 2 diabetes. Preserving beta-cell function is a key therapeutic goal.',
        source: 'NHS',
        url: 'https://www.nhs.uk/conditions/type-2-diabetes/',
      },
    ],
    conditionResearch: {
      'type-2-diabetes': [
        {
          title: 'Diabetes prevention through lifestyle intervention',
          summary:
            'The Diabetes Prevention Program showed that lifestyle modifications (diet and exercise) reduced type 2 diabetes incidence by 58% in high-risk individuals.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/11832527/',
        },
      ],
      cancer: [
        {
          title: 'Pancreatic cancer risk factors',
          summary:
            'Smoking, obesity, chronic pancreatitis, and type 2 diabetes are major risk factors. Early detection remains challenging with current screening methods.',
          source: 'NHS',
          url: 'https://www.nhs.uk/conditions/pancreatic-cancer/',
        },
      ],
    },
    supplements: [
      { name: 'Chromium Picolinate', benefit: 'May enhance insulin receptor sensitivity and improve glycemic control', evidenceLevel: 'Moderate', source: 'PubMed PMID: 17519436' },
      { name: 'Berberine', benefit: 'Plant alkaloid that may lower blood glucose through AMPK activation; comparable efficacy to metformin in some trials', evidenceLevel: 'Moderate', source: 'PubMed PMID: 18442638' },
    ],
    rehabilitationExercises: [],
  },

  kidneys: {
    organId: 'kidneys',
    name: 'Kidneys',
    description:
      'The kidneys are a pair of bean-shaped organs that filter about 180 litres of blood daily, removing waste products, balancing electrolytes, and regulating blood pressure through the renin-angiotensin system.',
    generalResearch: [
      {
        title: 'Omega-3 and renal function',
        summary:
          'Omega-3 fatty acid supplementation may slow the progression of kidney disease by reducing proteinuria and inflammation in the renal tissues.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/23235617/',
      },
      {
        title: 'Chronic kidney disease global impact',
        summary:
          'CKD affects approximately 10% of the global population. Early detection through eGFR and albumin-to-creatinine ratio testing is crucial for slowing progression.',
        source: 'NHS',
        url: 'https://www.nhs.uk/conditions/kidney-disease/',
      },
    ],
    conditionResearch: {
      'chronic-kidney-disease': [
        {
          title: 'Dietary management in CKD',
          summary:
            'Reducing sodium and protein intake can slow CKD progression. A low-protein diet (0.6-0.8 g/kg/day) may reduce proteinuria and delay dialysis.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/30842974/',
        },
      ],
      'cardiovascular-disease': [
        {
          title: 'Cardiorenal syndrome',
          summary:
            'CKD and cardiovascular disease share bidirectional risk. CKD patients have 10-20x higher cardiovascular mortality than the general population.',
          source: 'PubMed',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25592556/',
        },
      ],
    },
    supplements: [
      { name: 'Omega-3 Fatty Acids', benefit: 'May reduce proteinuria and slow CKD progression through anti-inflammatory effects', evidenceLevel: 'Moderate', source: 'PubMed PMID: 23235617' },
      { name: 'Vitamin D', benefit: 'CKD patients commonly deficient; supplementation supports bone metabolism and may reduce cardiovascular risk', evidenceLevel: 'Strong', source: 'NHS Renal Guidelines' },
    ],
    rehabilitationExercises: [],
  },

  'large-intestine': {
    organId: 'large-intestine',
    name: 'Large Intestine',
    description:
      'The large intestine (colon) is approximately 1.5 metres long and absorbs water, electrolytes, and vitamins from indigestible food matter. It houses trillions of beneficial bacteria forming the gut microbiome.',
    generalResearch: [
      {
        title: 'Dietary fibre and colorectal cancer risk',
        summary:
          'A meta-analysis found that each 10g/day increase in dietary fibre is associated with a 10% reduction in colorectal cancer risk, with the strongest association for cereal fibre.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22074852/',
      },
      {
        title: 'Gut microbiome and health',
        summary:
          'The gut microbiome influences immune function, mental health, and metabolic processes. Diversity of gut bacteria is a key indicator of intestinal health.',
        source: 'NHS',
        url: 'https://www.nhs.uk/live-well/eat-well/digestive-health/',
      },
    ],
    conditionResearch: {
      cancer: [
        {
          title: 'Colorectal cancer screening effectiveness',
          summary:
            'Regular screening from age 45 can reduce colorectal cancer mortality by up to 68%. Colonoscopy remains the gold standard for detection and prevention.',
          source: 'WHO',
          url: 'https://www.who.int/news-room/fact-sheets/detail/cancer',
        },
      ],
    },
    supplements: [
      { name: 'Probiotics', benefit: 'Support microbiome diversity and may reduce inflammation in inflammatory bowel conditions', evidenceLevel: 'Moderate', source: 'PubMed PMID: 28349086' },
      { name: 'Psyllium Fibre', benefit: 'Soluble fibre that supports regular bowel movements and may lower colorectal cancer risk', evidenceLevel: 'Strong', source: 'PubMed PMID: 22074852' },
      { name: 'Butyrate', benefit: 'Short-chain fatty acid that serves as primary fuel for colonocytes; supports mucosal integrity', evidenceLevel: 'Emerging', source: 'PubMed PMID: 29379067' },
    ],
    rehabilitationExercises: [],
  },

  'small-intestine': {
    organId: 'small-intestine',
    name: 'Small Intestine',
    description:
      'The small intestine is approximately 6 metres long and is the primary site for nutrient absorption. Its inner surface is lined with villi and microvilli, providing a surface area of about 32 square metres.',
    generalResearch: [
      {
        title: 'Glutamine and intestinal permeability',
        summary:
          'Glutamine is the primary fuel source for enterocytes. Supplementation may help maintain intestinal barrier function and reduce "leaky gut" permeability.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28239982/',
      },
      {
        title: 'Small intestinal bacterial overgrowth (SIBO)',
        summary:
          'SIBO is increasingly recognized as a cause of bloating, malabsorption, and IBS-like symptoms. Breath testing and targeted antibiotics are the standard approach.',
        source: 'NHS',
        url: 'https://www.nhs.uk/conditions/irritable-bowel-syndrome-ibs/',
      },
    ],
    conditionResearch: {},
    supplements: [
      { name: 'L-Glutamine', benefit: 'Primary fuel for intestinal cells; supports mucosal barrier repair and reduces intestinal permeability', evidenceLevel: 'Moderate', source: 'PubMed PMID: 28239982' },
      { name: 'Digestive Enzymes', benefit: 'May improve nutrient absorption in individuals with enzyme insufficiency or malabsorption syndromes', evidenceLevel: 'Moderate', source: 'PubMed PMID: 27060419' },
    ],
    rehabilitationExercises: [],
  },

  bladder: {
    organId: 'bladder',
    name: 'Bladder',
    description:
      'The urinary bladder is a hollow muscular organ that stores urine produced by the kidneys. It can hold approximately 400-600 mL of urine and is controlled by both voluntary and involuntary muscle contractions.',
    generalResearch: [
      {
        title: 'Cranberry and UTI prevention',
        summary:
          'A Cochrane review found that cranberry products reduce the risk of symptomatic UTIs by about 26%, particularly in women with recurrent infections.',
        source: 'PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28350517/',
      },
      {
        title: 'Bladder health and pelvic floor',
        summary:
          'Pelvic floor exercises (Kegels) are first-line treatment for urinary incontinence, with success rates of 56-70% for stress incontinence.',
        source: 'NHS',
        url: 'https://www.nhs.uk/conditions/urinary-incontinence/',
      },
    ],
    conditionResearch: {
      cancer: [
        {
          title: 'Bladder cancer risk factors and prevention',
          summary:
            'Smoking accounts for approximately 50% of bladder cancer cases. Adequate fluid intake and cruciferous vegetable consumption may be protective.',
          source: 'NHS',
          url: 'https://www.nhs.uk/conditions/bladder-cancer/',
        },
      ],
    },
    supplements: [
      { name: 'Cranberry Extract', benefit: 'Contains proanthocyanidins that prevent bacterial adhesion to bladder wall; reduces recurrent UTI risk', evidenceLevel: 'Strong', source: 'PubMed PMID: 28350517' },
      { name: 'D-Mannose', benefit: 'Simple sugar that may prevent E. coli adhesion to urinary tract lining', evidenceLevel: 'Moderate', source: 'PubMed PMID: 24276074' },
    ],
    rehabilitationExercises: [],
  },
};

export default organResearch;
