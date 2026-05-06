require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const LEAGUES = [
  { id: 135, nome: 'Serie A', key: 'serie-a' },
  { id: 39, nome: 'Premier League', key: 'premier-league' }
  // Aggiungi le altre leghe qui...
];

async function importaPartite() {
  console.log('🚀 Inizio importazione partite (Simulazione 2022)...');

  // Date simulate come nel tuo vecchio script
  const from = '2022-10-01';
  const to = '2022-10-22';

  for (const league of LEAGUES) {
    console.log(`📡 Fetching: ${league.nome}`);

    const url = `https://v3.football.api-sports.io/fixtures?league=${league.id}&season=2022&from=${from}&to=${to}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'x-apisports-key': process.env.API_FOOTBALL_KEY,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      });

      const data = await response.json();

      if (data.response && data.response.length > 0) {
        const matches = data.response.map(f => ({
          id_partita: f.fixture.id,
          campionato: league.nome,
          data_ora: f.fixture.date,
          sq_casa: f.teams.home.name,
          sq_trasferta: f.teams.away.name,
          turno: f.league.round,
          league_key: league.key
        }));

        const { error } = await supabase
          .from('prossime_partite')
          .upsert(matches, { onConflict: 'id_partita' });

        if (error) throw error;
        console.log(`✅ ${league.nome}: Inserite/Aggiornate ${matches.length} partite`);
      }
    } catch (err) {
      console.error(`❌ Errore per ${league.nome}:`, err.message);
    }

    // Pausa di 1 secondo tra le leghe (per evitare il 429 dell'API)
    await new Promise(res => setTimeout(res, 1000));
  }
}

importaPartite();
