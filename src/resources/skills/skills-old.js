export default
    [
        {
            name: 'Abbey-wise',
            isWiseSkill: true
        },
        {
            name: 'Accounting',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Research',
                'Reading',
                'Administration',
                'Estate Management'
            ],
            skillType: 'Academic',
            tools: {
                exists: true
            }
        },
        {
            name: 'Acting',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Conspicuous',
                'Falsehood'
            ],
            skillType: 'Special'
        },
        {
            name: 'Administration',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Special'
        },
        {
            name: 'Alchemy',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Enchanting',
                'Herbalism',
                'Apothecary',
                'Munitions',
                'Poisons'
            ],
            skillType: 'Sorcerous',
            tools: {
                exists: true,
                expendable: true
            }
        },
        {
            name: 'Althing-wise',
            isWiseSkill: true
        },
        {
            name: 'Ambition-wise',
            isWiseSkill: true
        },
        {
            name: 'Almanac',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Peasant'
        },
        {
            name: 'Amercement',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'School of Thought'
        },
        {
            name: 'Ancient Languages',
            roots: [
                'Perception'
            ],
            description: 'description',
            skillType: 'Academic'
        },
        {
            name: 'Anatomy',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Surgery',
                'Field Dressing'
            ],
            skillType: 'Academic'
        },
        {
            name: 'Animal Husbandry',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Peasant',
            tools: {
                exists: true
            }
        },
        {
            name: 'Apothecary',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Herbalism'
            ],
            skillType: 'Medicinal',
            tools: {
                exists: true,
                expendable: true
            }
        },
        {
            name: 'Appraisal',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Special'
        },
        {
            name: 'Appropriate Weapons',
            description: 'description'
        },
        {
            name: 'Architect',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Engineer',
                'Mason',
                'Carpenter'
            ],
            skillType: 'Academic',
            tools: {
                exists: true,
                type: 'Workshop'
            }
        },
        {
            name: 'Armor Training',
            roots: [
                'Power',
                'Speed'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Martial Training'
        },
        {
            name: 'Armorer',
            roots: [
                'Perception',
                'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Blacksmith',
                'Sewing',
                'Tanner'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
                type: 'Workshop'
            }
        },
        {
            name: 'Army-wise',
            isWiseSkill: true
        },
        {
            name: 'Arson',
            roots: [
                'Perception',
                'Agility'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Special',
            tools: {
                exists: true,
                expendable: true
            }
        },
        {
            name: 'Artificer-wise',
            isWiseSkill: true
        },
        {
            name: 'Artillerist',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Engineer',
                'Architect'
            ],
            skillType: 'Military',
            tools: {
                exists: true,
                type: 'Workshop'
            }
        },
        {
            name: 'Astrology',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Doctrine',
                'Symbology'
            ],
            skillType: 'Academic',
            tools: {
                exists: true
            }
        },
        {
            name: 'Atilliator',
            roots: [
                'Perception',
                'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Bowyer',
                'Blacksmith',
                'Carpenter'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
                type: 'Workshop'
            }
        },
        {
            name: 'Aura Reading',
            roots: [
                'Will',
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Sorcerous'
        },
        {
            name: 'Axe',
            roots: [
                'Power',
                'Agility'
            ],
            description: 'description',
            FoRKs: [
                'Brawling',
                'Martial Arts',
                'Melee Weapon Skill'
            ],
            skillType: 'Martial',
            tools: {
                exists: true,
                type: 'Axe'
            }
        },
		{
            name: 'Back Alley-wise',
            isWiseSkill: true
        },
		{
            name: 'Bad End-wise',
            isWiseSkill: true
        },
		{
            name: 'Baking',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Cooking'
            ],
            skillType: 'Peasant',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Banner-wise',
            isWiseSkill: true
        },
		{
            name: 'Bannerman-wise',
            isWiseSkill: true
        },
		{
            name: 'Bat-wise',
            isWiseSkill: true
        },
		{
            name: 'Beast of Burden-wise',
            isWiseSkill: true
        },
		{
            name: 'Beer-wise',
            isWiseSkill: true
        },
		{
            name: 'Begging',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Persuasion',
				'Falsehood',
				'Soothing Platitudes'
            ],
            skillType: 'Social',
            tools: {
				exists: false
            }
        },
		{
            name: 'Bird Husbandry',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Forester',
            tools: {
                exists: true
            }
        },
		{
            name: 'Blacksmith',
            roots: [
                'Agility',
				'Power'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Armorer',
				'Weaponsmith'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Bloodletting',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Apothecary',
				'Surgery'
            ],
            skillType: 'Medicinal',
            tools: {
                exists: true
            }
        },
		{
            name: 'Boatwright',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Carpenter'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Boss-wise',
            isWiseSkill: true
        },
		{
            name: 'Bow',
            roots: [
                'Agility'
            ],
            description: 'description',
            obstacles: {},
            skillType: '',
            tools: {
                exists: true,
				type: 'Bow'
            }
        },
		{
            name: 'Bowyer',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Carpenter',
				'Carving'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Boxing (Martial Arts)',
            roots: [
                'Power',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Brawling',
				'Appropriate melee weapon skill'
            ],
            skillType: 'Martial',
            tools: {
				exists: false
            }
        },
		{
            name: 'Brawling',
            roots: [
                'Power'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Boxing',
				'Melee weapon skill'
            ],
            skillType: 'Martial',
            tools: {
				exists: false
            }
        },
		{
            name: 'Brewer',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Miller'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Bribe-wise',
            isWiseSkill: true
        },
		{
            name: 'Burden of the Crown-wise',
            isWiseSkill: true
        },
		{
            name: 'Bureaucracy',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Research',
				'Etiquette',
				'Soothing Platitudes',
				'Falsehood'
            ],
            skillType: 'Special',
            tools: {
				exists: false
            }
        },
		{
            name: 'Butchery',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Peasant',
            tools: {
                exists: true
            }
        },
		{
            name: 'Cadence-wise',
            isWiseSkill: true
        },
		{
            name: 'Calligraphy',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Write'
            ],
            skillType: 'Academic',
            tools: {
                exists: true
            }
        },
		{
            name: 'Campaign-wise',
            isWiseSkill: true
        },
		{
            name: 'Cargo-wise',
            isWiseSkill: true
        },
		{
            name: 'Carpentry',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Engineer',
				'Carving'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Cartography',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Calligraphy',
				'Illumination'
            ],
            skillType: 'Academic',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Cartwright',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Carpentry'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Carving',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Carpentry',
				'Etching',
				'Engraving'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Traveling Gear'
            }
        },
		{
            name: 'Cave-In-wise',
            isWiseSkill: true
        },
		{
            name: 'Cave-wise',
            isWiseSkill: true
        },
		{
            name: 'Champion-wise',
            isWiseSkill: true
        },
		{
            name: 'Chandler',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Chattel-wise',
            isWiseSkill: true
        },
		{
            name: 'Cheating-wise',
            isWiseSkill: true
        },
		{
            name: 'Child-Rearing',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Social',
            tools: {
                exists: false
            }
        },
		{
            name: 'Chronology of Kings',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Ancient History',
				'Obscure History'
            ],
            skillType: 'Academic',
            tools: {
                exists: false
            }
        },
		{
            name: 'Church Law',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'School of Thought',
            tools: {
                exists: false
            }
        },
		{
            name: 'Clan-wise',
            isWiseSkill: true
        },
		{
            name: 'Climbing',
            roots: [
                'Speed'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Knots',
				'Rigging'
            ],
            skillType: 'Physical',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Cloth Dyeing',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Herbalism',
				'Vintner'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true
            }
        },
		{
            name: 'Cobbler',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Academic',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Command',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Oratory',
				'Conspicuous'
            ],
            skillType: 'Social',
            tools: {
                exists: false
            }
        },
		{
            name: 'Composition',
            roots: [
                'Will',
				'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Write',
				'Research',
				'Skills applicable to the content'
            ],
            skillType: 'Academic',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Conspicuous',
            roots: [
                'Will'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Command',
				'Oratory'
            ],
            skillType: 'Social',
            tools: {
                exists: false
            }
        },
		{
            name: 'Contract-wise',
            isWiseSkill: true
        },
		{
            name: 'Cooking',
            roots: [
                'Perception'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Herbalism',
				'Apothecary',
				'Baking'
            ],
            skillType: 'Peasant',
            tools: {
                exists: true,
				type: 'Traveling Gear'
            }
        },
		{
            name: 'Cooper',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Carpenter'
            ],
            skillType: 'Peasant',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Coppersmith',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Blacksmith',
				'Whitesmith'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Workshop'
            }
        },
		{
            name: 'Counterfeiting',
            roots: [
                'Perception',
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            FoRKs: [
                'Forgery',
				'Whitesmith',
				'Alchemy',
				'Etching'
            ],
            skillType: 'Craftsman',
            tools: {
                exists: true,
				type: 'Expendable'
            }
        },
		{
            name: 'Countryside-wise',
            isWiseSkill: true
        },
		{
            name: 'Crop-wise',
            isWiseSkill: true
        },
		{
            name: 'Crossbow',
            roots: [
				'Agility'
            ],
            description: 'description',
            obstacles: {},
            skillType: 'Martial',
            tools: {
                exists: true,
				type: 'Crossbow'
            }
        },
		{
            name: 'Crowd-wise',
            isWiseSkill: true
        },
		{
            name: 'Cryptography',
            roots: [
				'Perception'
            ],
            description: 'description',
            obstacles: {},
			FoRKs: [
                'Symbology',
				'Astrology',
				'Obscure History'
            ],
            skillType: 'Academic',
            tools: {
                exists: false
            }
        },
		{
            name: 'Cudgel',
            roots: [
				'Agility'
            ],
            description: 'description',
            obstacles: {},
			FoRKs: [
                'Brawling',
				'Martial Arts',
				'Boxing',
				'Axe',
				'Hammer',
				'Knives',
				'Mace',
				'Polearm',
				'Spear',
				'Staff',
				'Sword'
            ],
            skillType: 'Martial',
            tools: {
                exists: true,
				type: 'A big stick'
            }
        }
    ]