data_meleeaction = [
	{
		title: "Melee Weapon Attack",
		icon: "crossed-swords",
		subtitle: "Any attack made with a weapon",
		description: "Damage is listed on each weapon",
		reference: "Core, pg. 111-112.",
		bullets: [
		"Attacker Rolls: Ref + Skill + 1d10",
		"Defender Rolls: Ref + Skill + 1d10",
		"Attacker uses Melee (REF) or Fencing (REF) based on weapon used. (Swords, rapiers and monoblades use fencing, all other melee weapons use melee)",
		"Defender can use Martial arts, Fencing, Melee, Dodge, or Athletics depending on the situation and referee decision",
		"If the attacker's roll is higher than the defeder's, the attacker deals damage equal to the roll listed on the weapon, plus a bonus based on the character's body type (see Cyberpunk 2020 Core Rulebook page 112)",
		"For improvised weapons without a damage statistic, the referee with determine damage"
		]
	},
	{
		title: "Strike",
		icon: "mailed-fist",
		subtitle: "Make two strikes for 1d6/2 damage each",
		description: "1d6/2 + Damage Modifier",
		reference: "PHB, pg. 192.", // TODO: add references
		bullets: [
			"Attacker Rolls: Ref + Skill + Key Attack Bonus + 1d10",
			"Defender Rolls: Ref + Skill + 1d10",
			"Attacker uses their Martial Art (REF) or Brawling (REF)",
			"Defender can use Martial arts, Fencing, Melee, Dodge, or Athletics depending on the situation and referee decision",
			"If the attacker's roll is higher, they deal 1d6/2 + their Martial Art (REF) skill. This bonus is not added if the attacker is using the Brawling (REF) skill.",
			"This attack can be made once per hand per round, but multiple strikes count as a single action"
		]
	},
	{
		title: "Kick",
		icon: "foot-trip",
		subtitle: "Make a single kick for 1d6 damage",
		description: "1d6 + Damage Modifier",
		reference: "PHB, pg. 192.",
		bullets: [
			"Attacker Rolls: Ref + Skill + Key Attack Bonus + 1d10",
			"Defender Rolls: Ref + Skill + 1d10",
			"Attacker uses their Martial Art (REF) or Brawling (REF)",
			"Defender can use Martial arts, Fencing, Melee, Dodge, or Athletics depending on the situation and referee decision",
			"If the attacker's roll is higher, they deal 1d6 + their Martial Art (REF) skill. This bonus is not added if the attacker is using the Brawling (REF) skill.",
			"This attack can only be made once per round"
		]
	},
	{
		title: "Block/Parry",
		icon: "riot-shield",
		subtitle: "Stop or absorb damage",
		description: "Cast a spell with a casting time of 1 bonus action",
		reference: "PHB, pg. 192.",
		bullets: [
			"You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
			"For further details, see the <i>Cast a spell</i> action."
		]
	}
]
