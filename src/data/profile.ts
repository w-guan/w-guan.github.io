// Edit this file to update the content shown across the entire website.
export const profile = {
  name: 'Wenwen Guan',
  // Adjust the visible crop of the profile photo, e.g. 'center 20%', 'center center', or '45% 30%'.
  photoPosition: '45% 25%',
  // Move and zoom the photo inside the circular frame without moving the frame itself.
  photoScale: 1.08,
  photoOffsetX: '-5%',
  position: 'PhD Candidate',
  affiliation: [
    'ACLC',
    'University of Amsterdam',
  ],
  location: 'Amsterdam, the Netherlands',
  email: {
    user: 'w.guan',
    domain: 'uva.nl',
  },
  headline: 'Variation, Context, and Disagreement Beyond Noise',
  bio: [
    'I am Wenwen, a PhD candidate working across corpus and computational linguistics. My doctoral research examines metadiscourse in argumentative writing and speaking by learners at lower proficiency levels, using variation across registers to understand their rhetorical repertoire and sensitivity to different communicative demands.',
    'Rather than relying on frequency-based comparisons alone, I examine functional patterns, linguistic realisations, and the context-sensitive relationships between metadiscoursal functions and forms. Analysing these relationships often depends on careful human interpretation and annotation.',
    'This work has led to a broader interest in how interpretive judgements become structured linguistic data. I am particularly interested in whether annotator disagreement reflects inconsistency, uncertainty, contextual ambiguity, or genuinely different interpretations—and in annotation practices that preserve analytically meaningful variation. More broadly, this has led me to ask how annotation and analytical decisions affect the validity and robustness of corpus-based findings about variation in language use.',
  ],
  availability: [
    'Open to research collaborations',
    'Open to postdoctoral opportunities',
    'Available for invited talks and workshops',
  ],
  links: {
    linkedin: '',
    orcid: 'https://orcid.org/0009-0000-8589-0409',
    github: 'https://github.com/w-guan',
    cv: '',
  },
};

export const researchInterests = [
  {
    title: 'Learner Corpus Research',
    description: 'I use written and spoken learner corpora to identify recurring patterns and examine how learners communicate meaning through language, treating learner language as a system in its own right rather than primarily as deviation from target-language norms.',
  },
  {
    title: 'Context-Sensitive Variation in Language Use',
    description: 'I study how the same linguistic forms can serve different communicative functions depending on task, register, and mode, with attention to the possible influence of sociocultural experience and L1 background. My current analytical lens is metadiscourse: the linguistic resources used to organise discourse, express stance, and engage audiences.',
  },
  {
    title: 'Corpus Annotation and Interpretive Variation',
    description: 'I am interested in how complex, context-dependent linguistic phenomena are annotated in corpora and in what inter-annotator disagreement reveals about ambiguity, category boundaries, and competing yet plausible interpretations. These questions motivate me to explore annotation practices that retain meaningful differences in interpretation rather than reducing disagreement to error.',
  },
];

export const researchApproach = {
  title: 'Analysing and Annotating Context-Dependent Corpus Data',
  paragraphs: [
    'My approach combines quantitative analysis with close reading of complex, context-dependent corpus data. Quantitative methods reveal systematic patterns of variation, while contextual interpretation guides annotation and helps explain how linguistic forms map onto communicative functions.',
    'My experience annotating a corpus has inspired me to explore whether the conventional practice of establishing a single ground-truth label is always appropriate for pragmatic, multifunctional, and context-dependent phenomena, and how this practice shapes the data used in subsequent analysis. This has developed into an interest in human label variation, including whether differences across annotations reflect linguistic ambiguity, overlapping categories, or features of the annotation process itself. I am particularly interested in whether retaining annotator-level judgments and label distributions can represent such interpretive variation more informatively than a single adjudicated label. More broadly, I want to examine how annotation and analytical choices affect the validity and robustness of corpus-based findings, connecting corpus linguistics with human-in-the-loop annotation and perspectivist approaches to NLP.',
  ],
};

export const publications = [
  {
    year: '2025',
    title: 'Enhancing the Automatic Classification of Metadiscourse in Low-Proficiency Learners’ Spoken and Written English Texts Using XLNet',
    authors: 'Wenwen Guan, Marijn Alta, and Jelke Bloem',
    venue: 'Proceedings of the 6th Workshop on Computational Approaches to Discourse, Context and Document-Level Inferences (CODI 2025), pp. 27–41 · Association for Computational Linguistics · DOI: 10.18653/v1/2025.codi-1.3',
    type: 'Conference paper',
    url: 'https://aclanthology.org/2025.codi-1.3/',
    note: 'Poster presented at CODI 2025. Travel support from the Heidelberg Institute for Theoretical Studies (HITS) is gratefully acknowledged.',
    selected: true,
  },
  {
    year: '2025',
    title: 'Review of Stoltz & Taylor (2024): Mapping texts: Computational text analysis for the social sciences',
    authors: 'Wenwen Guan',
    venue: 'International Journal of Corpus Linguistics, 30(1), pp. 112–118',
    type: 'Book review',
    url: 'https://www.jbe-platform.com/content/journals/10.1075/ijcl.00063.gua',
    note: 'John Benjamins Publishing Company · DOI: 10.1075/ijcl.00063.gua',
    selected: true,
  },
];

// Conference talks, posters, and invited presentations that do not have a
// corresponding published paper. Add new entries here in reverse chronological order.
export const conferencePresentations: Array<{
  date: string;
  title: string;
  authors: string;
  event: string;
  location: string;
  type: 'Oral presentation' | 'Poster presentation' | 'Invited talk' | 'Workshop presentation' | 'Software demonstration';
  url?: string;
  note?: string;
}> = [
  {
    date: 'Jun 2025',
    title: 'Are Annotators Culturally Biased? An Experimental Study of “I Think”',
    authors: 'Wenwen Guan',
    event: '46th Annual Conference of the International Computer Archive of Modern and Medieval English (ICAME 46)',
    location: 'Vilnius University, Lithuania',
    type: 'Oral presentation',
  },
  {
    date: 'Aug 2024',
    title: 'Automatic Metadiscourse Classification in Learners’ Writing and Speaking with SpanBERT',
    authors: 'Wenwen Guan',
    event: '34th Meeting of Computational Linguistics in the Netherlands (CLIN 34)',
    location: 'Leiden University, the Netherlands',
    type: 'Oral presentation',
  },
  {
    date: 'Jun 2024',
    title: 'Exploring Metadiscourse Variation in Learners’ Speaking and Writing',
    authors: 'Wenwen Guan',
    event: '45th Annual Conference of the International Computer Archive of Modern and Medieval English (ICAME 45)',
    location: 'University of Vigo, Spain',
    type: 'Oral presentation',
  },
  {
    date: 'Jun 2024',
    title: 'Prodigy Team as a Game Changer in Computational Corpus Annotation',
    authors: 'Wenwen Guan',
    event: '45th Annual Conference of the International Computer Archive of Modern and Medieval English (ICAME 45)',
    location: 'University of Vigo, Spain',
    type: 'Software demonstration',
  },
  {
    date: 'Jul 2023',
    title: 'An AI-Assisted Annotation Approach for Non-Coders: Beyond Modelling Metadiscourse',
    authors: 'Wenwen Guan',
    event: '12th International Corpus Linguistics Conference',
    location: 'Lancaster University, UK',
    type: 'Oral presentation',
  },
  {
    date: 'May 2023',
    title: 'A Consistent Approach to Annotating and Modelling Metadiscourse for Non-Coders',
    authors: 'Wenwen Guan',
    event: '44th Annual Conference of the International Computer Archive of Modern and Medieval English (ICAME 44)',
    location: 'North-West University, South Africa',
    type: 'Oral presentation',
  },
  {
    date: 'Sep 2022',
    title: 'Metadiscourse in Chinese ESL Learners’ Public Speaking: A New Taxonomy',
    authors: 'Wenwen Guan',
    event: 'British Association for Applied Linguistics Conference 2022 (BAAL 2022)',
    location: 'Queen’s University Belfast, UK',
    type: 'Oral presentation',
    url: 'https://www.qub.ac.uk/schools/ssesw/events/archive/BritishAssociationofAppliedLinguisticsConference.html',
  },
  // {
  //   date: 'Apr 2022',
  //   title: 'A Universal Metadiscourse Model for Writing and Speaking',
  //   authors: 'Wenwen Guan',
  //   event: '31st Anéla/VIOT Juniorendag',
  //   location: 'Leiden University, the Netherlands',
  //   type: 'Poster presentation',
  // },
];

export const experience = [
  { period: '2020 — 2026', role: 'PhD in Linguistics', institution: 'Amsterdam Center for Language and Communication · University of Amsterdam', kind: 'Education', description: '' },
  // { period: '2017 — 2020', role: 'Master in Translation Studies', institution: 'School of Foreign Languages · Renmin University of China', kind: 'Education', description: '' },
  // { period: '2012 — 2016', role: 'Bachelor in English Language and Literature', institution: 'School of Foreign Languages · Ocean University of China', kind: 'Education', description: '' },
];

export const studentSupervision = [
  {
    period: 'Sep 2024 — Jan 2025',
    role: 'An Experimental Study of “I Think”',
    institution: 'Student: W. Gnat',
    kind: 'Student internship',
    description: '',
  },
  {
    period: 'Oct 2023 — Feb 2024',
    role: 'Enhancing the Automatic Classification of Metadiscourse Categories in Spoken and Written English Texts by Low Proficiency Learners Using SpanBERT',
    institution: 'Student: M. Alta',
    kind: 'BSc thesis',
    description: 'Co-supervised with Jelke Bloem.',
  },
  {
    period: 'Oct 2022 — Jan 2023',
    role: 'Processing of Meta-discourse: Identification, Classification, and Error Detection',
    institution: 'Student: N. Egter',
    kind: 'BSc thesis',
    description: '',
  },
];

export const academicService = [
  {
    period: 'Sep 2023 — Oct 2024',
    role: 'Chair, Central PhD Council',
    institution: 'University of Amsterdam',
    kind: 'Leadership',
    description: 'Chaired monthly board meetings, coordinated tasks among board members, and collaborated with faculty and national PhD councils. Coordinated the biannual PhD survey and contributed to the resulting report, organised the first university-wide PhD event, and represented doctoral researchers in discussions with the Rector, policy management, and works councils.',
  },
  {
    period: 'Nov 2022 — Oct 2024',
    role: 'PhD Representative, Faculty of Humanities',
    institution: 'University of Amsterdam',
    kind: 'Academic service',
    description: 'Represented PhD candidates from the Faculty of Humanities at monthly Central PhD Council meetings. Worked with representatives from other faculties on PhD working conditions, including social security, employment benefits, and training provision, and contributed to related surveys.',
  },
  {
    period: 'Sep 2021 — Oct 2022',
    role: 'PhD Representative, ACLC Research School',
    institution: 'University of Amsterdam',
    kind: 'Academic service',
    description: 'Represented PhD candidates on the ACLC Advisory Board, participated in interviews with prospective PhD candidates, and organised research lunches and PhD community events.',
  },
];

export const awards = [
  {
    period: 'Sep 2022',
    role: 'Faculty Finalist, Three Minute Thesis (3MT) PhD Pitch Competition',
    institution: 'Faculty of Humanities · University of Amsterdam',
    kind: 'Recognition',
    description: 'Selected as one of three faculty finalists.',
  },
];
