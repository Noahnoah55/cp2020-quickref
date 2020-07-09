data_action = [
    {
        title: "Single Fire",
        icon: "gunshot",
        subtitle: "Ranged attack",
        description: "Fire a single shot from your weapon",
        reference: "Core, pg. 105-105.",
        bullets: [
		"Roll: 1d10 + Ref + Weapon Skill + Weapon Accuracy",
		"Fumbles if the d10 comes up as a 1, automatically missing",
		"If the result is greater than the appropriate range DC then the shot hits"
        ]
    },
    {
        title: "Three Round Burst",
        icon: "bullets",
        subtitle: "3-shot ranged attack",
        description: "Fire three shots from your weapon for better damage and accuracy",
        reference: "Core, pg. 106.",
        bullets: [
		"Roll: Ref + Weapon Skill + Weapon Accuracy + 1d10",
		"Add +3 to your roll if rolling in medium or close range",
		"If the result is greater than the appropriate range DC then the shot hits",
		"On a hit, roll 1d6/2 (rounding up) to determine how many shots hit"
        ]
    },
    {
        title: "Full Auto",
        icon: "machine-gun",
        subtitle: "Several shot ranged attack",
        description: "Fire up to your weapon's total rate of fire at one or multiple targets",
        reference: "Core, pg. 106.",
        bullets: [
		"Roll: Ref + Weapon Skill + Weapon Accuracy + 1d10 for each target",
		"Add +1 to your roll for every 10 shots fired in close range",
		"Subtract -1 from your roll for every 10 shots fired in medium, long, and extreme range",
		"For every point of success over the required hit roll, one round hits the target up to the maximum ROF for the weapon"
        ]
    },
    {
        title: "Suppresive Fire",
        icon: "machine-gun",
        subtitle: "Creates a 'fire zone' of bullets",
        description: "Fire several bullets into an area, creating an AOE threat to incoming enemies",
        reference: "Core, pg. 106-107",
        bullets: [
		"Create a zone of bullets with a DC equal to the number of bullets fired divided by the width of the zone in meters",
		"Minimum zone width is 2 meters",
		"Characters that pass by the zone must make a save of 1d10 + REF + Athletics Skill against the DC of the zone. On a failed roll they take 1d6 bullets to random locations",
		"Zones can overlap to increase their DC"
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
        ]
    }
]
