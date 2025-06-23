const Hero = require('../models/Hero');
// Get Hero Section
exports.getHero = async (req, res) => {
    try {
        const hero = await Hero.findOne(); // Assuming only one hero section
        if (!hero) {
            return res.status(404).json({ msg: 'Hero section not found' });
        }
        res.json(hero);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
// Create or Update Hero Section
exports.createOrUpdateHero = async (req, res) => {
    const { heroTitle, textBody, imageUrl } = req.body;
    try {
        let hero = await Hero.findOne();
        if (hero) {
            // Update existing
            hero.heroTitle = heroTitle;
            hero.textBody = textBody;
            hero.imageUrl = imageUrl;
            await hero.save();
            return res.json(hero);
        }
        // Create new
        hero = new Hero({ heroTitle, textBody, imageUrl });
        await hero.save();
        res.status(201).json(hero);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
