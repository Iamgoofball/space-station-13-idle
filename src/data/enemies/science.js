export default {
	minibot: {
		name: "Minibot",
		icon: require("@/assets/art/combat/enemies/minibots.png"),
		stats: {
			maxHealth: 250,
			attackSpeed: 1.4,
			precision: 61,
			power: 68,
			evasion: 90,
			damageType: "burn",
			burnProtection: 40
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						count: [5,10],
						weight: 27
					},
					{
						id: 'gold',
						weight: 25
					},
					{
						id: 'titanium',
						weight: 20
					},
					{
						id: 'ticket3',
						count: [1, 2],
						weight: 4
					},
				]
			},
			{
				chance: 1,
				item: "uranium"
			}
		]
	},
	techpriest: {
		name: "Techpriest Roboticist",
		icon: require("@/assets/art/combat/enemies/techpriest.png"),
		stats: {
			maxHealth: 260,
			attackSpeed: 1.7,
			precision: 63,
			power: 60,
			evasion: 80,
			damageType: "burn",
			burnProtection: 40
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'wire',
						count: [1,2],
						weight: 7
					},
					{
						id: 'meleeSharp5',
						weight: 4
					},
				]
			},
			{
				chance: .02,
				item: "jumpsuitFabrication"
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatH',
						weight: 1
					},
					{
						id: 'iron',
						weight: 1
					},
					{
						id: 'bluespace',
						weight: 1
					}
				]
			}
		]
	},
	mech: {
		name: "Mech Building Roboticist",
		icon: require("@/assets/art/combat/enemies/mechbuild.png"),
		stats: {
			maxHealth: 270,
			attackSpeed: 2.1,
			precision: 86,
			power: 85,
			evasion: 20,
			damageType: "brute",
			burnProtection: 40
		},
		itemTables: [
			{
				chance: 0.4,
				itemTable: [
					{
						id: 'wire',
						weight: 54
					},
					{
						id: 'meleeToolbox6',
						weight: 8
					},
					{
						id: 'ripley',
						weight: 5
					},
				]
			},
			{
				chance: 1,
				itemTable: [
					{
						id: 'foodMeatZ',
						weight: 1
					},
					{
						id: 'plasma',
						weight: 1
					}
				]
			}
		]
	},
	ayyyyy: {
		name: "Bald Tourist",
		icon: require("@/assets/art/combat/enemies/bald_visitor.png"),
		stats: {
			maxHealth: 280,
			attackSpeed: 2.2,
			precision: 103,
			power: 54,
			evasion: 110,
			damageType: "burn",
			burnProtection: 40
		},
		itemTables: [
			{
				chance: 0.5,
				itemTable: [
					{
						id: 'bluespace',
						count: 3,
						weight: 19
					},
					{
						id: "armorBrute6",
						weight: 2
					},
				]
			},
			{
				chance: 1,
				item: "foodMeatZ"
			}
		]
	},
}