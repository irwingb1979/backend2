const Body = require('../models/Body');
// Get Body Section
exports.getBody = async (req, res) => {
    try {
        const body = await Body.findOne(); // Assuming only one body section
        if (!body) {
            return res.status(404).json({ msg: 'Body section not found' });
        }
        res.json(body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
// Create or Update Body Section
exports.createOrUpdateBody = async (req, res) => {
    const { aboutTitle, aboutSubtitle, aboutText, aboutImageUrl, featuredTitle, featuredSubtitle, featuredText, featuredImageUrl } = req.body;
    try {
        let body = await Body.findOne();
        if (body) {
            // Update existing
            body.aboutTitle = aboutTitle;
            body.aboutSubtitle = aboutSubtitle;
            body.aboutText = aboutText;
            body.aboutImageUrl = aboutImageUrl;
            body.featuredTitle = featuredTitle;
            body.featuredSubtitle = featuredSubtitle;
            body.featuredText = featuredText;
            body.featuredImageUrl = featuredImageUrl;
            await body.save();
            return res.json(body);
        }
        // Create new
        body = new Body({ aboutTitle, aboutSubtitle, aboutText, aboutImageUrl, featuredTitle, featuredSubtitle, featuredText, featuredImageUrl });
        await body.save();
        res.status(201).json(body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}  
