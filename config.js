// config.js
export const API_CONFIG = {
  KEY: '7006efdf852a18f03fc97f0383559831',
  BASE_URL: 'https://v3.football.api-sports.io',
  STAGIONE: 2022 // Come nel tuo script
};

export const CAMPIONATI = {
  'serie-a': { idApi: 135, nome: 'Serie A' },
  'premier-league': { idApi: 39, nome: 'Premier League' },
   'serie-b':  { idApi: 136,  nome: 'Serie B'},
   'premier-league': { idApi: 39,   nome: 'Premier League'},
    'la-liga':              { idApi: 140,  nome: 'LaLiga',               prefisso: 'LL',   priorita: 8,  paese: 'Spagna',      tipo: 'nazionale' },
    'bundesliga':           { idApi: 78,   nome: 'Bundesliga',           prefisso: 'BL',   priorita: 9,  paese: 'Germania',    tipo: 'nazionale' },
    'ligue-1':              { idApi: 61,   nome: 'Ligue 1',              prefisso: 'L1',   priorita: 10, paese: 'Francia',     tipo: 'nazionale' },
    'eredivisie':           { idApi: 88,   nome: 'Eredivisie',           prefisso: 'ED',   priorita: 11, paese: 'Olanda',      tipo: 'nazionale' },
    'pro-league':           { idApi: 144,  nome: 'Pro League',           prefisso: 'BEL',  priorita: 12, paese: 'Belgio',      tipo: 'nazionale' },
    'austrian-bundesliga':  { idApi: 218,  nome: 'Austrian Bundesliga',  prefisso: 'AUS',  priorita: 13, paese: 'Austria',     tipo: 'nazionale' },
    'allsvenskan':          { idApi: 113,  nome: 'Allsvenskan',          prefisso: 'SVE',  priorita: 14, paese: 'Svezia',      tipo: 'nazionale' },
    'eliteserien':          { idApi: 103,  nome: 'Eliteserien',          prefisso: 'NOR',  priorita: 15, paese: 'Norvegia',    tipo: 'nazionale' },
    'super-league':         { idApi: 197,  nome: 'Super League',         prefisso: 'GL',   priorita: 16, paese: 'Grecia',      tipo: 'nazionale' },
    'swiss-league':         { idApi: 207,  nome: 'Swiss League',         prefisso: 'SWL',  priorita: 17, paese: 'Svizzera',    tipo: 'nazionale' },
    'danish-league':        { idApi: 119,  nome: 'Danish League',        prefisso: 'DL',   priorita: 18, paese: 'Danimarca',   tipo: 'nazionale' },
    'super-lig':            { idApi: 203,  nome: 'Süper Lig',            prefisso: 'TL',   priorita: 19, paese: 'Turchia',     tipo: 'nazionale' },
    'saudi-pro-league':     { idApi: 307,  nome: 'Saudi Pro League',     prefisso: 'SPL',  priorita: 20, paese: 'Arabia',      tipo: 'nazionale' },
    'scottish-premiership': { idApi: 179,  nome: 'Scottish Premiership', prefisso: 'SL',   priorita: 21, paese: 'Scozia',      tipo: 'nazionale' },
    'eerste-divisie':       { idApi: 89,   nome: 'Eerste Divisie',       prefisso: 'EE',   priorita: 22, paese: 'Olanda',      tipo: 'nazionale' }
  },
};
