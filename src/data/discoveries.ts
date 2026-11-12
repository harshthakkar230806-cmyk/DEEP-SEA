export type DiscCat = 'wreck'|'geo'|'bio'|'human'|'mystery';
export interface DiscDef { id: string; zone: number; cat: DiscCat; tier: number; name: string; desc: string; journal: string; credits: number; research: number; rep: number; effect?: { type: 'sonar'|'sell'|'repair'|'research'; value: number; text: string }; mystery?: number; fixed?: [number, number]; }
const D = (id: string, zone: number, cat: DiscCat, tier: number, name: string, desc: string, journal: string, credits: number, research: number, rep: number, extra: Partial<DiscDef> = {}): DiscDef => ({ id, zone, cat, tier, name, desc, journal, credits, research, rep, ...extra });
export const DISCOVERIES: DiscDef[] = [
  D('d_module', 1, 'human', 1, 'Abandoned Research Module', 'A pressure module from a forgotten survey programme, still holding sealed instruments.', 'Logs reference a 1970s survey that was never published. The crew left in a hurry.', 6000, 20, 5, { fixed:[26,-20], effect:{ type:'research', value:0.1, text:'+10% research from discoveries' } }),
  D('d_cargo1', 1, 'wreck', 1, 'Cargo Ship "Marta Vell"', 'A freighter lost in a storm decades ago. Containers still litter the seabed.', 'Cargo manifests list industrial machinery. Salvage rights are unclaimed.', 9000, 10, 4),
  D('d_reef', 1, 'bio', 1, 'Luminous Coral Garden', 'A reef of coral colonies that glow faintly under sonar light.', 'Several coral species here are unrecorded.', 5000, 25, 6),
  D('d_trawler', 1, 'wreck', 1, 'Sunken Trawler', 'A fishing trawler, hull intact, nets still tangled around the winch.', 'Its logbook ends mid-sentence.', 4000, 8, 2),
  D('d_ridge', 2, 'geo', 1, 'Mineral Ridge', 'A seam of dense ore running along a drowned ridge.', 'Survey data suggests more seams deeper down.', 14000, 15, 3),
  D('d_researchvessel', 2, 'wreck', 1, 'Research Vessel "Halcyon"', 'A scientific vessel that vanished while mapping the shelf edge.', 'Last transmission: an unexplained low-frequency tone.', 22000, 40, 8, { mystery:1 }),
  D('d_jelly', 2, 'bio', 1, 'Bioluminescent Colony', 'A drifting colony of jellies pulsing in slow, coordinated waves.', 'The pulses appear synchronised across hundreds of metres.', 12000, 45, 7, { effect:{ type:'sell', value:0.03, text:'+3% sell prices (new biotech partners)' } }),
  D('d_lostexp', 2, 'human', 2, 'Lost Expedition Camp', 'Equipment crates from an expedition that never returned.', 'The sonar array here was pointing downward when abandoned.', 26000, 50, 9, { mystery:1 }),
  D('d_milsub', 3, 'wreck', 2, 'Military Submarine "K-141"', 'A decades-old military submarine resting on a ledge.', 'Hull breached from the inside. Officially lost to a reactor fault.', 60000, 60, 10, { mystery:2 }),
  D('d_cave', 3, 'geo', 2, 'Giant Methane Cave', 'A cavern whose walls glitter with methane hydrate.', 'Rich energy source, structurally unstable.', 45000, 45, 6),
  D('d_squid', 3, 'bio', 2, 'Giant Squid Rookery', 'Enormous organisms circling a nest of eggs, each larger than a car.', 'First documented rookery of its kind.', 52000, 90, 12),
  D('d_station', 3, 'human', 2, 'Abandoned Deep-Sea Research Station', 'A pressurised habitat with working lights and no crew.', 'Terminals show a sonar anomaly logged 14 times in one week.', 80000, 100, 14, { mystery:2, effect:{ type:'sonar', value:0.1, text:'+10% sonar range (recovered calibration data)' } }),
  D('d_canyon', 4, 'geo', 2, 'Abyssal Canyon', 'A canyon with sheer walls that swallow sonar returns.', 'Sonar returns from the canyon floor arrive late.', 70000, 70, 8, { mystery:2 }),
  D('d_unkvessel', 4, 'wreck', 2, 'Unknown Vessel', 'A hull that matches no registry. The metal is the wrong colour.', 'Alloy composition does not match any known foundry.', 120000, 120, 15, { mystery:3 }),
  D('d_artobj', 4, 'mystery', 2, 'Unidentified Metallic Object', 'A smooth object half-buried in the plain.', 'It is not a wreck and not a deposit.', 90000, 130, 16, { mystery:3 }),
  D('d_vent1', 5, 'geo', 2, 'The Black Cathedral', 'A cluster of towering vents venting superheated plumes.', 'Geothermal output is far beyond model predictions.', 100000, 90, 10, { effect:{ type:'repair', value:0.1, text:'-10% repair costs (thermal alloy research)' } }),
  D('d_ventlife', 5, 'bio', 2, 'Vent Colony', 'Pale organisms thriving at temperatures that should kill them.', 'Their metabolism is unlike any recorded species.', 110000, 150, 14),
  D('d_trench1', 6, 'geo', 2, 'The Cleft', 'A narrow vertical rift, a hundred metres wide and impossibly deep.', 'Sonar cannot see its bottom.', 150000, 120, 12, { mystery:3 }),
  D('d_ancient', 6, 'mystery', 2, 'Ancient Artifact Cache', 'Carved stone objects far older than any known culture.', 'Radiometric dating gives an age that makes no sense.', 220000, 200, 20, { mystery:4 }),
  D('d_signal1', 7, 'mystery', 3, 'Artificial Structure', 'Geometric, regular, and clearly not natural. It is not of human design.', 'The structure is emitting a repeating pattern.', 350000, 300, 25, { mystery:4 }),
  D('d_hadal', 7, 'mystery', 3, 'Strange Energy Field', 'A region where compasses spin and sonar rings back twice.', 'Equipment fails predictably inside the field.', 300000, 280, 22, { mystery:5 }),
  D('d_source', 8, 'mystery', 4, 'The Signal Source', 'The signal does not come from a transmitter. It comes from the structure itself, and it is answering you.', 'SIGNAL RESPONDS TO YOUR SUBMARINE.', 600000, 500, 40, { mystery:6 }),
  D('d_gate', 8, 'mystery', 4, 'The Threshold', 'An opening in the seabed, lit from below by something that is not fire.', 'Everything you have built was leading here.', 900000, 800, 60, { mystery:6 }),
];
export const DISC: Record<string, DiscDef> = Object.fromEntries(DISCOVERIES.map(d => [d.id, d]));
