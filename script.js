document.addEventListener('DOMContentLoaded', () => {
    // This frontend code is now secure because it does not contain the API key.
    // The key is used in the backend serverless function (api/generate.js).
    
    const laws = [
        {
            title: "Law 1: Never Outshine the Master",
            summary: "Make those above you feel comfortably superior. In your desire to please and impress them, do not go too far in displaying your talents or you might accomplish the opposite – inspire fear and insecurity.",
            practice: "In your next team meeting, when you have a good idea, try presenting it in a way that gives your superior some of the credit. For example, say 'Building on your idea about X, I was thinking...'. Observe their reaction.",
            criticism: "This law can encourage sycophantic behavior and stifle innovation. A healthy work environment should value talent and new ideas, regardless of who they come from. Truly confident leaders are not threatened by the abilities of their subordinates."
        },
        {
            title: "Law 2: Never put too Much Trust in Friends, Learn how to use Enemies",
            summary: "Friends are more likely to betray you in a crunch, as they are more prone to envy. A former enemy, on the other hand, will be more loyal because they have more to prove. If you have no enemies, find a way to make them.",
            practice: "Identify a professional rival. Instead of avoiding them, find a low-stakes opportunity to collaborate or ask for their opinion on a minor issue. This can be a way to neutralize the rivalry and potentially gain an ally.",
            criticism: "This law promotes a paranoid and isolating worldview. Genuine friendships and trust are essential for a fulfilling life and can be a source of great strength and support. Treating everyone with suspicion can lead to a lonely existence."
        },
        {
            title: "Law 3: Conceal your Intentions",
            summary: "Keep people off-balance and in the dark by never revealing the purpose behind your actions. If they have no clue what you are up to, they cannot prepare a defense. Guide them far enough down the wrong path and by the time they realize your intentions, it will be too late.",
            practice: "In your next project, keep your long-term goals to yourself. Share information on a need-to-know basis. This is not about being deceptive, but about maintaining strategic advantage.",
            criticism: "While strategic ambiguity can be useful, a complete lack of transparency can destroy trust and make collaboration impossible. In many situations, open and honest communication is far more effective for building strong relationships and achieving shared goals."
        },
        {
            title: "Law 4: Always Say Less than Necessary",
            summary: "When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Even if you are saying something banal, it will seem original if you make it vague, open-ended, and sphinxlike. Powerful people impress and intimidate by saying less.",
            practice: "In your next conversation or meeting, make a conscious effort to speak less and listen more. When you do speak, be concise. Notice how people react to your brevity.",
            criticism: "Silence can be misinterpreted as arrogance, disinterest, or a lack of intelligence. Effective communication often requires clarity and providing enough information for others to understand your position. Saying too little can lead to misunderstandings."
        },
        {
            title: "Law 5: So Much Depends on Reputation – Guard it with your Life",
            summary: "Reputation is the cornerstone of power. Through reputation alone you can intimidate and win; once it slips, however, you are vulnerable, and will be attacked on all sides. Make your reputation unassailable.",
            practice: "Identify the key qualities you want to be known for in your professional life (e.g., reliable, creative, decisive). For the next week, make sure all your actions reinforce this reputation. Also, be aware of any potential threats to it.",
            criticism: "While reputation is important, obsessing over it can lead to inauthenticity and a fear of taking risks. Sometimes, doing the right thing might be unpopular and could temporarily harm your reputation. A focus on integrity is more important than a focus on image."
        },
        {
            title: "Law 6: Court Attention at All Costs",
            summary: "Everything is judged by its appearance; what is unseen counts for nothing. Never let yourself get lost in the crowd, then, or buried in oblivion. Stand out. Be conspicuous, at all cost. Make yourself a magnet of attention by appearing larger, more colorful, more mysterious than the bland and timid masses.",
            practice: "Find a way to stand out in your next project or presentation. This could be through a unique visual style, a controversial but well-argued point, or simply a higher level of polish than anyone else.",
            criticism: "Constant attention-seeking can
