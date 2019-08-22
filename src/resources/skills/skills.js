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
        }
    ]