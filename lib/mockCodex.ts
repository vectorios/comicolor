// lib/mockCodex.ts

export interface Chapter {
  id: string;
  title: string;
  summary: string;
  content: string; // The full text of the chapter
}

export interface Book {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

export const codexData: Book[] = [
  {
    id: 'I',
    title: 'Book I: The Public & Constitutional Portal',
    description: 'Defines the public facade of the Nation, its core principles, and the initial engagement process for all prospective citizens. This book outlines the fundamental rights and expectations of visitors and future Guardians.',
    chapters: [
      { 
        id: '1-1', 
        title: 'Chapter 1: The Grand Plaza', 
        summary: 'Establishes the purpose and content of the nation\'s landing page.',
        content: `Article 1.1.1: The primary public-facing digital interface of the ColorVerse, hereinafter referred to as "The Grand Plaza," shall serve as the official port of entry. It must clearly articulate the nation's Manifesto, its core constitutional pillars, and the solemn Oath required of all prospective Guardians.\n\nArticle 1.1.2: The Grand Plaza shall feature a rotating exhibition of notable works and exemplary Guardians, selected by the Moderator Council, to inspire and inform visitors of the creative potential within the Verse.`
      },
      { 
        id: '1-2', 
        title: 'Chapter 2: The National Gallery', 
        summary: 'Defines the public gallery for showcasing influential creations.',
        content: `Article 1.2.1: A publicly accessible gallery, known as "The National Gallery," shall be maintained to exhibit a curated collection of the most influential physical and digital creations. Curation shall be based on community acclaim, artistic merit, and historical significance.\n\nArticle 1.2.2: Submissions for consideration in The National Gallery are open to all Guardians, subject to review and approval by the Guild of Curators.`
      },
      { 
        id: '1-3', 
        title: 'Chapter 3: The Founding Library', 
        summary: 'Mandates the public accessibility of the Chromatic Codex.',
        content: `Article 1.3.1: The entirety of this Chromatic Codex, including all amendments and judicial precedents, shall be made available to the public within a digital library. This ensures transparency and universal access to the laws of the Verse.`
      },
      { 
        id: '1-4', 
        title: 'Chapter 4: The Frontier Post', 
        summary: 'Governs the authentication and registration protocols.',
        content: `Article 1.4.1: The process of becoming a Guardian, known as "Taking the Guardian's Oath," requires the explicit and informed acceptance of this Codex. The authentication system must be secure, robust, and protect the personal data of all citizens as outlined in Book IV.`
      },
    ]
  },
  {
    id: 'II',
    title: 'Book II: The Citizen\'s Domain',
    description: 'Governs the rights, tools, and environments available to ratified Guardians within the core application. This is the manual for daily life and creation within the Verse.',
    chapters: [
      { 
        id: '2-1', 
        title: 'Chapter 1: The Guardian\'s Desk', 
        summary: 'Details the personal dashboard and its functionalities.',
        content: `Article 2.1.1: Each Guardian shall be provided with a "Guardian's Desk," a personal command center for managing their Sovereign Colors, creations, market activities, and civic responsibilities. The layout and functionality shall be uniform to ensure equal access to all tools of the Verse.`
      },
      { 
        id: '2-2', 
        title: 'Chapter 2: The Great Registry', 
        summary: 'Outlines the principles of Sovereign Color ownership.',
        content: `Article 2.2.1: The "Great Registry" is the definitive, immutable ledger of all Sovereign Colors. Ownership is established at the moment of Genesis and is recorded publicly. Each color is unique and cannot be duplicated.\n\nArticle 2.2.2: A specific range of colors shall be designated as the "Public Domain," available for any Guardian to claim through the Genesis process.`
      },
    ]
  },
];