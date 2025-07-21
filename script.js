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
            criticism: "Constant attention-seeking can be perceived as shallow and narcissistic. Substance is ultimately more important than style. Meaningful contributions will eventually be recognized, often without the need for theatrical displays."
        },
        {
            title: "Law 7: Get Others to Do the Work for You, but Always Take the Credit",
            summary: "Use the wisdom, knowledge, and legwork of other people to further your own cause. Not only will such assistance save you valuable time and energy, it will give you a godlike aura of efficiency and speed. In the end your helpers will be forgotten and you will be remembered.",
            practice: "Delegate a task you would normally do yourself. When the task is complete, ensure you are the one who presents the results. Frame it as a team success under your leadership.",
            criticism: "This is a recipe for creating a toxic work environment and destroying morale. Good leaders give credit where it's due and empower their team. Taking credit for others' work is unethical and will eventually be exposed, destroying your reputation."
        },
        {
            title: "Law 8: Make Other People Come to You – Use Bait if Necessary",
            summary: "When you force the other person to act, you are the one in control. It is always better to make your opponent come to you, abandoning his own plans in the process. Lure him with fabulous gains – then attack. You hold the cards.",
            practice: "Instead of actively pursuing an opportunity, think about how you can make the other party approach you first. This could involve showcasing a unique skill or piece of information they need.",
            criticism: "This can be a passive-aggressive and manipulative tactic. In many collaborative environments, being proactive and reaching out to others is a sign of initiative and leadership, not weakness."
        },
        {
            title: "Law 9: Win Through Your Actions, Never Through Argument",
            summary: "Any momentary triumph you think you have gained through argument is really a Pyrrhic victory: The resentment and ill will you stir up is stronger and lasts longer than any momentary change of opinion. It is much more powerful to get others to agree with you through your actions, without saying a word.",
            practice: "The next time you disagree with someone, instead of arguing, demonstrate the validity of your point of view through a successful project or a tangible result. Let the outcome speak for itself.",
            criticism: "Argument and debate are essential for intellectual progress and reaching the best decisions. Avoiding arguments entirely can lead to unresolved issues and a lack of critical examination of ideas. The key is to argue constructively, not to avoid it."
        },
        {
            title: "Law 10: Infection: Avoid the Unhappy and Unlucky",
            summary: "You can die from someone else's misery – emotional states are as infectious as diseases. You may feel you are helping the drowning man but you are only precipitating your own disaster. The unfortunate sometimes draw misfortune on themselves; they will also draw it on you. Associate with the happy and fortunate instead.",
            practice: "Evaluate the people you spend the most time with. Are there individuals who consistently bring negativity into your life? Consider reducing your exposure to them.",
            criticism: "This law lacks compassion and empathy. People experience hardship for many reasons, often beyond their control. Abandoning friends or colleagues in their time of need is a sign of poor character, not a sign of power."
        },
        {
            title: "Law 11: Learn to Keep People Dependent on You",
            summary: "To maintain your independence you must always be needed and wanted. The more you are relied on, the more freedom you have. Make people depend on you for their happiness and prosperity and you have nothing to fear. Never teach them enough so that they can do without you.",
            practice: "Develop a skill or area of expertise that is unique and valuable to your team or organization. Become the go-to person for that specific area.",
            criticism: "Creating dependencies can lead to bottlenecks and a lack of resilience in a team. A true leader empowers others and helps them grow, even if it means they eventually become independent. Fostering dependency is a sign of insecurity."
        },
        {
            title: "Law 12: Use Selective Honesty and Generosity to Disarm Your Victim",
            summary: "One sincere and honest move will cover over dozens of dishonest ones. Open-hearted gestures of honesty and generosity bring down the guard of even the most suspicious people. Once your selective honesty opens a hole in their armor, you can deceive and manipulate them at will.",
            practice: "Perform an unexpected act of kindness or generosity for a colleague or rival. This can build goodwill and make them more receptive to you in the future.",
            criticism: "This is a deeply cynical and manipulative approach to human relationships. Honesty and generosity should be genuine, not tools for deception. People will eventually see through this tactic, leading to a complete loss of trust."
        },
        {
            title: "Law 13: When Asking for Help, Appeal to People’s Self-Interest, Never to their Mercy or Gratitude",
            summary: "If you need to turn to an ally for help, do not bother to remind him of your past assistance and good deeds. He will find a way to ignore you. Instead, uncover something in your request, or in your alliance with him, that will benefit him, and emphasize it out of all proportion.",
            practice: "The next time you need to ask for a favor, frame your request in terms of how it will benefit the other person. What's in it for them?",
            criticism: "While appealing to self-interest is often effective, it ignores the power of altruism, friendship, and a sense of duty. People often help others out of kindness, without expecting anything in return. Assuming everyone is purely self-interested is a narrow view of human nature."
        },
        {
            title: "Law 14: Pose as a Friend, Work as a Spy",
            summary: "Knowing about your rival is critical. Use spies, or be a spy yourself. In polite social encounters, learn to probe. Ask indirect questions to get people to reveal their weaknesses and intentions. There is no occasion that is not an opportunity for artful spying.",
            practice: "In your next social or professional gathering, pay close attention to the conversations around you. What can you learn about the goals and motivations of others? Ask open-ended questions to encourage people to share more.",
            criticism: "This law encourages deceit and a violation of privacy. Building relationships on the premise of gathering intelligence is unethical and will ultimately lead to shallow and untrustworthy connections."
        },
        {
            title: "Law 15: Crush Your Enemy Totally",
            summary: "All great leaders since Moses have known that a feared enemy must be crushed completely. (Sometimes they have learned this the hard way.) If one ember is left alight, no matter how dimly it smolders, a fire will eventually break out. More is lost through stopping halfway than through total annihilation: The enemy will recover, and will seek revenge. Crush him, not only in body and spirit, but in reputation.",
            practice: "When you win a competitive situation, ensure that your victory is decisive and that the competition cannot easily challenge you again in the same way. This is not about being cruel, but about securing your position.",
            criticism: "This is an extremely aggressive and ruthless approach. In many contexts, showing magnanimity in victory can be a more powerful move, turning former enemies into loyal allies. A 'crush them' mentality can create a cycle of revenge."
        },
        {
            title: "Law 16: Use Absence to Increase Respect and Honor",
            summary: "Too much circulation makes the price go down: The more you are seen and heard from, the more common you appear. If you are already established in a group, temporary withdrawal from it will make you more talked about, even more admired. You must learn when to leave. Create value through scarcity.",
            practice: "If you are a constant presence in a particular meeting or social group, try being absent once. See if your absence is noted and if it changes the dynamic upon your return.",
            criticism: "Absence can also be interpreted as a lack of commitment or interest. In many collaborative environments, consistent presence and participation are valued. This tactic can backfire if people simply learn to do without you."
        },
        {
            title: "Law 17: Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
            summary: "Humans are creatures of habit with an insatiable need to see familiarity in other people's actions. Your predictability gives them a sense of control. Turn the tables: Be deliberately unpredictable. Behavior that seems to have no consistency or purpose will keep them off-balance, and they will wear themselves out trying to explain your moves.",
            practice: "Break a pattern in your routine. If you are always agreeable in meetings, try playing devil's advocate on a minor point. If you are always serious, inject some unexpected humor. Observe the effect on others.",
            criticism: "While a degree of unpredictability can be intriguing, being consistently erratic can make you appear unstable and unreliable. People need a degree of predictability to trust and collaborate with you effectively."
        },
        {
            title: "Law 18: Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous",
            summary: "The world is dangerous and enemies are everywhere—everyone has to protect themselves. A fortress seems the safest. But isolation exposes you to more dangers than it protects you from—it cuts you off from valuable information, it makes you conspicuous and an easy target. Better to circulate among people, find allies, mingle. You are shielded from your enemies by the crowd.",
            practice: "Identify an area where you tend to isolate yourself. Make an effort to connect with others in that area. Attend a networking event, join a new committee, or simply have lunch with a different group of colleagues.",
            criticism: "This law is actually good advice. It contradicts some of the more paranoid and isolating laws in the book. Building networks and being part of a community is a source of strength and resilience."
        },
        {
            title: "Law 19: Know Who You’re Dealing With — Do Not Offend the Wrong Person",
            summary: "There are many different kinds of people in the world, and you can never assume that everyone will react to your strategies in the same way. Deceive or outmaneuver some people and they will spend the rest of their lives seeking revenge. They are wolves in lambs’ clothing. Choose your victims and opponents carefully, then—never offend the wrong person.",
            practice: "Before entering into any negotiation or potential conflict, do your homework on the other person. What is their reputation? What are their triggers? What is their style of operating?",
            criticism: "This is another piece of practical advice. Understanding the people you interact with is a key component of emotional intelligence and effective communication. It's less about 'choosing victims' and more about social awareness."
        },
        {
            title: "Law 20: Do Not Commit to Anyone",
            summary: "It is the fool who always rushes to take sides. Do not commit to any side or cause but yourself. By maintaining your independence, you become the master of others—playing people against one another, making them pursue you.",
            practice: "In a situation where two parties are competing for your support, resist the urge to commit immediately. Explore the advantages of staying neutral and see how both sides try to win you over.",
            criticism: "A lack of commitment can be seen as disloyalty and a lack of principle. Sometimes, it is important to take a stand for what you believe in, even if it means making powerful enemies. Constantly shifting allegiances will earn you a reputation for being untrustworthy."
        },
        {
            title: "Law 21: Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
            summary: "No one likes feeling stupider than the next person. The trick, then, is to make your victims feel smart—and not just smart, but smarter than you are. Once convinced of this, they will never suspect that you may have ulterior motives.",
            practice: "In a conversation with someone you want to influence, let them explain something to you that you already know. Ask seemingly naive questions. Make them feel like the expert. This can lower their defenses.",
            criticism: "This is a form of intellectual dishonesty. It's manipulative and condescending. A more respectful approach is to engage with people on an equal footing, valuing their intelligence without feigning ignorance."
        },
        {
            title: "Law 22: Use the Surrender Tactic: Transform Weakness into Power",
            summary: "When you are weaker, never fight for honor’s sake; choose surrender instead. Surrender gives you time to recover, time to torment and irritate your conqueror, time to wait for his power to wane. Do not give him the satisfaction of fighting and defeating you—surrender first. By turning the other cheek you infuriate and unsettle him. Make surrender a tool of power.",
            practice: "In a losing battle, instead of fighting to the bitter end, consider a strategic retreat or concession. How can you use this concession to reposition yourself for a future advantage?",
            criticism: "Surrender can be a valid strategic option, but it should not be a default. Sometimes, it is important to stand and fight for your principles, even when the odds are against you. The 'surrender' tactic can be a cover for cowardice."
        },
        {
            title: "Law 23: Concentrate Your Forces",
            summary: "Conserve your forces and energies by keeping them concentrated at their strongest point. You gain more by finding a rich mine and mining it deeper, than by flitting from one shallow mine to another—intensity defeats extensity every time. When looking for sources of power to elevate you, find the one key patron, the fat cow who will give you milk for a long time to come.",
            practice: "Identify the 20% of your efforts that are producing 80% of your results. How can you focus more of your energy on that high-leverage 20%?",
            criticism: "This is sound advice based on the Pareto principle. Focusing your energy is a key to effectiveness. However, the metaphor of the 'fat cow' is dehumanizing and objectifying. It's better to think in terms of mutually beneficial relationships."
        },
        {
            title: "Law 24: Play the Perfect Courtier",
            summary: "The perfect courtier thrives in a world where everything revolves around power and political dexterity. He has mastered the art of indirection; he flatters, yields to superiors, and asserts power over others in the most oblique and graceful manner. Learn and apply the laws of courtiership and there will be no limit to how far you can rise in the court.",
            practice: "Study the social dynamics of your workplace as if it were a royal court. Who holds the real power? What are the unwritten rules? How can you navigate this landscape more effectively?",
            criticism: "The concept of being a 'courtier' is anachronistic and promotes a culture of office politics and backstabbing. A modern, healthy organization should value transparency, merit, and direct communication, not courtly intrigue."
        },
        {
            title: "Law 25: Re-create Yourself",
            summary: "Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience. Be the master of your own image rather than letting others define it for you. Incorporate dramatic devices into your public gestures and actions—your power will be enhanced and your character will seem larger than life.",
            practice: "Identify an aspect of your public persona you'd like to change. For the next month, consciously act in a way that reflects this new identity. It could be being more decisive, more creative, or more assertive.",
            criticism: "This law encourages authenticity and self-creation, which can be positive. However, the emphasis on 'dramatic devices' and being 'larger than life' can lead to a persona that is inauthentic and theatrical, rather than a genuine expression of self."
        },
        {
            title: "Law 26: Keep Your Hands Clean",
            summary: "You must seem a paragon of civility and efficiency: Your hands are never soiled by mistakes and nasty deeds. Maintain such a spotless appearance by using others as scapegoats and cat’s-paws to disguise your involvement.",
            practice: "When a project involves a necessary but unpopular action, delegate that action to someone else. Your role is to remain above the fray.",
            criticism: "This is a cowardly and unethical law. A true leader takes responsibility for their actions and decisions, both popular and unpopular. Using others as scapegoats is a sign of weak character and will destroy trust."
        },
        {
            title: "Law 27: Play on People’s Need to Believe to Create a Cultlike Following",
            summary: "People have an overwhelming desire to believe in something. Become the focal point of such desire by offering them a cause, a new faith to follow. Keep your words vague but full of promise; emphasize enthusiasm over rationality and clear thinking. Give your new disciples rituals to perform, ask them to make sacrifices on your behalf.",
            practice: "Identify a shared frustration or desire within a group. Frame a project or initiative as a 'cause' that addresses this need. Use strong, evocative language to build enthusiasm.",
            criticism: "This is a manual for becoming a cult leader. It's a deeply manipulative and dangerous law that preys on people's vulnerabilities. Inspiring people is one thing; creating a cultlike following is another, and it's deeply unethical."
        },
        {
            title: "Law 28: Enter Action with Boldness",
            summary: "If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Better to enter with boldness. Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid.",
            practice: "Identify a decision you've been hesitating on. Make a bold choice and commit to it fully. Even if it's not the perfect choice, the decisiveness itself can create momentum.",
            criticism: "Boldness can be recklessness. While decisiveness is a virtue, it should be based on careful consideration and planning. Rushing into action without thinking is a recipe for disaster. There is a difference between calculated risk-taking and blind audacity."
        },
        {
            title: "Law 29: Plan All the Way to the End",
            summary: "The ending is everything. Plan all the way to it, taking into account all the possible consequences, obstacles, and twists of fortune that might reverse your hard work and give the glory to others. By planning to the end you will not be overwhelmed by circumstances and you will know when to stop.",
            practice: "For your next major project, don't just plan the initial steps. Create a detailed plan that covers all phases, including potential challenges and the final outcome. Envision the end state clearly.",
            criticism: "This is excellent advice. Thorough planning is a key to success in any endeavor. It's one of the most practical and universally applicable laws in the book."
        },
        {
            title: "Law 30: Make Your Accomplishments Seem Effortless",
            summary: "Your actions must seem natural and executed with ease. All the toil and practice that go into them, and also all the clever tricks, must be concealed. When you act, act effortlessly, as if you could do much more. Avoid the temptation of revealing how hard you work—it only raises questions.",
            practice: "The next time you complete a difficult task successfully, downplay the effort involved when you present it. Project an aura of natural talent and ease.",
            criticism: "This can create unrealistic expectations and devalue the importance of hard work. Sharing your struggles and the effort you put in can be inspiring to others and make you more relatable. It also helps others learn."
        },
        {
            title: "Law 31: Control the Options: Get Others to Play with the Cards You Deal",
            summary: "The best deceptions are the ones that seem to give the other person a choice: Your victims feel they are in control, but are actually your puppets. Give people options that come out in your favor whichever one they choose. Force them to make choices between the lesser of two evils, both of which serve your purpose. Put them on the horns of a dilemma: They are gored wherever they turn.",
            practice: "When you want to persuade someone, present them with two or three options, all of which are acceptable to you. This gives them a sense of agency while ensuring you get the outcome you want.",
            criticism: "This is a classic manipulation technique. It's a false choice. In a healthy relationship or negotiation, you should be open to options that you haven't pre-selected. This tactic can backfire if people realize they are being manipulated."
        },
        {
            title: "Law 32: Play to People’s Fantasies",
            summary: "The truth is often avoided because it is ugly and unpleasant. Never appeal to truth and reality unless you are prepared for the anger that comes from disenchantment. Life is so harsh and distressing that people who can manufacture romance or conjure up fantasy are like oases in the desert: Everyone flocks to them. There is great power in tapping into the fantasies of the masses.",
            practice: "When presenting an idea, don't just focus on the dry facts. Weave a compelling story around it. Appeal to people's hopes and aspirations. Paint a picture of a desirable future.",
            criticism: "This law encourages deception and the creation of false hope. While storytelling is a powerful tool, it should be grounded in reality. Leading people on with pure fantasy is unethical and will eventually lead to disillusionment and anger."
        },
        {
            title: "Law 33: Discover Each Man’s Thumbscrew",
            summary: "Everyone has a weakness, a gap in the castle wall. That weakness is usually an insecurity, an uncontrollable emotion or need; it can also be a small secret pleasure. Either way, once found, it is a thumbscrew you can turn to your advantage.",
            practice: "Pay attention to the people around you. What are their passions, their fears, their vanities? Understanding these emotional drivers can help you predict their behavior and influence them.",
            criticism: "This is a predatory and exploitative view of human relationships. The goal should be to understand people in order to connect with them and collaborate more effectively, not to find their weaknesses to use against them."
        },
        {
            title: "Law 34: Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
            summary: "The way you carry yourself will often determine how you are treated: In the long run, appearing vulgar or common will make people disrespect you. For a king respects himself and inspires the same sentiment in others. By acting regally and confident of your powers, you make yourself seem destined to wear a crown.",
            practice: "Pay attention to your posture, your tone of voice, and your general demeanor. Project confidence and self-respect. Dress in a way that commands respect. 'Fake it till you make it.'",
            criticism: "Confidence is important, but acting 'royal' can come across as arrogant and out of touch. True respect is earned through competence, integrity, and how you treat others, not by putting on airs."
        },
        {
            title: "Law 35: Master the Art of Timing",
            summary: "Never seem to be in a hurry—hurrying betrays a lack of control over yourself, and over time. Always seem patient, as if you know that everything will come to you eventually. Become a detective of the right moment; sniff out the spirit of the times, the trends that will carry you to power. Learn to stand back when the time is not yet ripe, and to strike fiercely when it has reached fruition.",
            practice: "Before making your next move, ask yourself: Is this the right time? What are the current trends? Is the situation ripe for this action? Practice patience and observation.",
            criticism: "This is another piece of excellent, practical advice. Understanding timing is crucial in almost every aspect of life. It's about strategic patience and recognizing opportunities."
        },
        {
            title: "Law 36: Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge",
            summary: "By acknowledging a petty problem you give it existence and credibility. The more attention you pay an enemy, the stronger you make him; and a small mistake is often made worse and more visible when you try to fix it. It is sometimes best to leave things alone. If there is something you want but cannot have, show contempt for it. Less interest you reveal, the more superior you seem.",
            practice: "The next time you are faced with a minor slight or a problem you can't solve, try ignoring it completely. Act as if it's beneath your notice. Observe the effect.",
            criticism: "Ignoring problems doesn't make them go away. Some issues need to be addressed directly, even if they are unpleasant. The 'sour grapes' approach of disdaining what you can't have can also be a form of denial and self-deception."
        },
        {
            title: "Law 37: Create Compelling Spectacles",
            summary: "Striking imagery and grand symbolic gestures create the aura of power—everyone responds to them. Stage spectacles for those around you, then, full of arresting visuals and radiant symbols that heighten your presence. Dazzled by appearances, no one will notice what you are really doing.",
            practice: "In your next presentation or project launch, think about the visual and symbolic elements. How can you make it a memorable event, not just a transmission of information? Use ceremony and spectacle.",
            criticism: "A focus on spectacle can be a substitute for substance. If your underlying work is weak, no amount of spectacle will save it in the long run. It can also be seen as a manipulative distraction from the real issues."
        },
        {
            title: "Law 38: Think as You Like but Behave Like Others",
            summary: "If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them. They will find a way to punish you for making them feel inferior. It is far safer to blend in and nurture the common touch. Share your originality only with tolerant friends and those who are sure to appreciate your uniqueness.",
            practice: "In a conservative group environment, conform to the social conventions, even if you disagree with them internally. Save your unique ideas for a more receptive audience.",
            criticism: "This law promotes conformity and discourages progress. Many of the greatest advancements in history have come from people who dared to challenge the status quo. While social intelligence is important, this law can be a recipe for mediocrity."
        },
        {
            title: "Law 39: Stir Up Waters to Catch Fish",
            summary: "Anger and emotion are strategically counterproductive. You must always stay calm and objective. But if you can make your enemies angry while staying calm yourself, you gain a decided advantage. Put your enemies off-balance: Find the chink in their vanity through which you can rattle them and you hold the strings.",
            practice: "In a competitive situation, identify what makes your opponent emotional. Without losing your own cool, you can subtly provoke that emotion to make them act irrationally.",
            criticism: "This is a manipulative and antagonistic tactic. Intentionally provoking people to gain an advantage is unethical and can escalate conflicts unnecessarily. Emotional intelligence should be used to de-escalate, not to inflame."
        },
        {
            title: "Law 40: Despise the Free Lunch",
            summary: "What is offered for free is dangerous—it usually involves either a trick or a hidden obligation. What has worth is worth paying for. By paying your own way you stay clear of gratitude, guilt, and deceit. It is also wise to pay for the best. Lavishness is a sign of power.",
            practice: "Be wary of offers that seem too good to be true. When someone offers you something for free, ask yourself what they might want in return. Always be willing to pay for quality.",
            criticism: "This law promotes a cynical view of generosity. People often do things for others without expecting anything in return. While it's wise to be cautious, assuming every free offer is a trap can cause you to miss out on genuine opportunities and acts of kindness."
        },
        {
            title: "Law 41: Avoid Stepping into a Great Man’s Shoes",
            summary: "What happens first always appears better and more original than what comes after. If you succeed a great man or have a famous parent, you will have to accomplish double their achievements to outshine them. Do not get lost in their shadow, or stuck in a past not of your own making: Establish your own name and identity by changing course. Slay the overbearing father, disparage his legacy, and gain power by shining in your own way.",
            practice: "If you are following a successful predecessor, don't try to imitate them. Find a new direction, a new niche, or a new style to make your own mark. Differentiate yourself clearly.",
            criticism: "While it's important to forge your own path, you don't need to 'slay' your predecessors. You can respect and build upon their legacy while still establishing your own identity. Disparaging the past can seem petty and insecure."
        },
        {
            title: "Law 42: Strike the Shepherd and the Sheep Will Scatter",
            summary: "Trouble can often be traced to a single strong individual—the stirrer, the arrogant subordinate, the poisoner of goodwill. If you allow such people room to operate, others will succumb to their influence. Do not wait for the troubles they cause to multiply, do not try to negotiate with them—they are irredeemable. Neutralize their influence by isolating or banishing them. Strike at the source of the trouble and the sheep will scatter.",
            practice: "If you identify a single individual who is the source of negativity or conflict in a group, focus your efforts on neutralizing their influence, rather than trying to reason with all their followers.",
            criticism: "This law can be used to justify bullying and the silencing of dissent. It's important to distinguish between a genuine troublemaker and someone who is simply raising legitimate concerns. Labeling someone 'irredeemable' is a dangerous oversimplification."
        },
        {
            title: "Law 43: Work on the Hearts and Minds of Others",
            summary: "Coercion creates a reaction that will eventually work against you. You must seduce others into wanting to move in your direction. A person you have seduced becomes your loyal pawn. And the way to seduce others is to operate on their individual psychologies and weaknesses. Soften up the resistant by working on their emotions, playing on what they hold dear and what they fear. Ignore the hearts and minds of others and they will grow to hate you.",
            practice: "Instead of trying to win an argument with logic, try to connect with the other person on an emotional level. What are their values? What are their fears? Frame your position in a way that aligns with their emotional landscape.",
            criticism: "Seduction and emotional manipulation are ethically questionable. A more respectful approach is to persuade people through a combination of sound logic, genuine empathy, and by finding common ground. The goal should be alignment, not control."
        },
        {
            title: "Law 44: Disarm and Infuriate with the Mirror Effect",
            summary: "The mirror reflects reality, but it is also the perfect tool for deception: When you mirror your enemies, doing exactly as they do, they cannot figure out your strategy. The Mirror Effect mocks and humiliates them, making them overreact. By holding a mirror to their psyches, you seduce them with the illusion that you share their values; by holding a mirror to their actions, you teach them a lesson. Few can resist the power of the Mirror Effect.",
            practice: "In a negotiation, try subtly mirroring the body language and speech patterns of the other person. This can build rapport. On a more strategic level, if an opponent uses a particular tactic against you, consider using the same tactic back at them.",
            criticism: "This can be a childish and unproductive tactic. It can escalate conflicts and make you appear reactive rather than strategic. In many situations, it's better to rise above the games of your opponents rather than mirroring them."
        },
        {
            title: "Law 45: Preach the Need for Change, but Never Reform Too Much at Once",
            summary: "Everyone understands the need for change in the abstract, but on the day-to-day level people are creatures of habit. Too much innovation is traumatic, and will lead to revolt. If you are new to a position of power, or an outsider trying to build a power base, make a show of respecting the old way of doing things. If change is necessary, make it feel like a gentle improvement on the past.",
            practice: "When implementing a new idea, frame it as an evolution of existing practices, not a radical revolution. Emphasize continuity and respect for tradition, even as you introduce change.",
            criticism: "This is sound advice on change management. People are often resistant to change, and an incremental approach is usually more effective than a disruptive one. It's about being strategic and empathetic in how you lead people through a transition."
        },
        {
            title: "Law 46: Never Appear Too Perfect",
            summary: "Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable. Only gods and the dead can seem perfect with impunity.",
            practice: "Share a story about a mistake you made or a weakness you have. This can make you more relatable and less intimidating to others, which can help build trust and rapport.",
            criticism: "This is good advice for building authentic relationships. Vulnerability can be a source of strength. It's a healthy counterpoint to some of the book's other laws that encourage a facade of perfection and invincibility."
        },
        {
            title: "Law 47: Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
            summary: "The moment of victory is often the moment of greatest peril. In the heat of victory, arrogance and overconfidence can push you past the goal you had aimed for, and by going too far, you make more enemies than you defeat. Do not allow success to go to your head. There is no substitute for strategy and careful planning. Set a goal, and when you have reached it, stop.",
            practice: "After achieving a success, resist the urge to immediately push for more. Take time to consolidate your gains and assess the new landscape. Know your endgame and stick to it.",
            criticism: "This is another piece of wise and practical advice. Knowing when to stop is a sign of strategic discipline and foresight. It prevents overreach and the snatching of defeat from the jaws of victory."
        },
        {
            title: "Law 48: Assume Formlessness",
            summary: "By taking a shape, by having a visible plan, you open yourself to attack. Instead of taking a form for your enemy to grasp, keep yourself adaptable and on the move. Accept the fact that nothing is certain and no law is fixed. The best way to protect yourself is to be as fluid and formless as water; never bet on stability or lasting order. Everything changes.",
            practice: "Cultivate flexibility in your thinking and your plans. Be prepared to adapt to changing circumstances. Avoid rigid ideologies and be open to new information that challenges your assumptions.",
            criticism: "This law promotes adaptability and resilience, which are essential qualities for navigating a complex world. It serves as a good meta-law for the entire book, reminding the reader that no single law is a silver bullet and that context is everything."
        }
    ];

    const appContainer = document.getElementById('app-container');
    const topNav = document.getElementById('top-nav');
    const pageTitle = document.getElementById('page-title');
    const errorModal = document.getElementById('error-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // --- Modal Logic ---
    const showModal = (message) => {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) errorMessage.textContent = message || "An unknown error occurred.";
        errorModal.classList.remove('hidden');
        errorModal.classList.add('flex');
    };
    closeModalBtn.addEventListener('click', () => {
        errorModal.classList.add('hidden');
        errorModal.classList.remove('flex');
    });

    // --- Gemini API Call via Backend ---
    async function getGeminiResponse(prompt, outputElement) {
        outputElement.innerHTML = '<div class="loader"></div>';
        
        const apiUrl = '/api/generate';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });

            const responseText = await response.text();

            if (!response.ok) {
                let errorMessage = `Request failed with status ${response.status}`;
                try {
                    const errorJson = JSON.parse(responseText);
                    errorMessage = errorJson.error || errorMessage;
                } catch (e) {
                    errorMessage = responseText || errorMessage;
                }
                throw new Error(errorMessage);
            }

            if (!responseText) {
                throw new Error("The server returned an empty response. This may be due to a timeout or safety filter.");
            }

            const result = JSON.parse(responseText);
            const text = result.text.replace(/\n/g, '<br>');
            outputElement.innerHTML = `<p class="text-gray-300 leading-relaxed">${text}</p>`;

        } catch (error) {
            console.error('API Error:', error);
            outputElement.innerHTML = '';
            showModal(error.message);
        }
    }
    
    // --- View Rendering Logic ---
    const views = {
        home: `
            <div id="home-view" class="view">
                <div class="power-banner">
                    <h1>POWER</h1>
                    <p class="author-name">by Robert Greene</p>
                </div>
                <div class="home-content-area">
                    </div>
            </div>
        `,
        laws: `
            <div id="laws-view" class="view view-padding">
                <select id="laws-dropdown" class="w-full p-3 border text-lg mb-8">
                    <option value="">Choose A Law</option>
                    ${laws.map((law, index) => `<option value="${index}">Law ${index + 1}: ${law.title.split(': ')[1]}</option>`).join('')}
                </select>
                <div id="law-content-container"></div>

                <div class="interplay-section mt-12 p-6 border border-gray-700 rounded-md bg-gray-900">
                    <h2 class="text-xl font-bold text-white mb-4">Law Interplay Analysis</h2>
                    <p class="text-gray-400 mb-4">Select two or three laws to see how they might interact, complement, or contradict each other in practice.</p>
                    <select id="interplay-laws-dropdown" multiple class="w-full p-3 border text-lg mb-4 h-40">
                        ${laws.map((law, index) => `<option value="${index}">Law ${index + 1}: ${law.title.split(': ')[1]}</option>`).join('')}
                    </select>
                    <button id="analyze-interplay-btn" class="gemini-btn w-full sm:w-auto px-4 py-2 rounded-md">✨ Analyze Interplay</button>
                    <div id="interplay-output" class="gemini-output mt-3"></div>
                </div>
            </div>
        `,
        videos: `
            <div id="videos-view" class="view view-padding">
                <div class="text-center text-gray-400">
                    <p>Video content coming soon.</p>
                </div>
            </div>
        `
    };

    const renderLawContent = (lawIndex) => {
        const law = laws[lawIndex];
        return `
            <div class="space-y-8">
                <div>
                    <h3 class="subsection-title">The Law</h3>
                    <p class="text-gray-300 leading-relaxed">${law.summary}</p>
                </div>
                <div>
                    <h3 class="subsection-title">Keys to Practice</h3>
                    <p class="text-gray-300 leading-relaxed">${law.practice}</p>
                </div>
                <div>
                    <h3 class="subsection-title">The Reversal</h3>
                    <p class="text-gray-300 leading-relaxed">${law.criticism}</p>
                </div>
                <div class="space-y-6 pt-4">
                    <div>
                        <button class="gemini-btn scenario-btn w-full sm:w-auto px-4 py-2 rounded-md" data-law-title="${law.title}">✨ Generate Scenario</button>
                        <div class="gemini-output scenario-output mt-3"></div>
                    </div>
                    <div>
                        <button class="gemini-btn apply-law-btn w-full sm:w-auto px-4 py-2 rounded-md" data-law-title="${law.title}">💡 Apply This Law</button>
                        <div class="gemini-output apply-law-output mt-3"></div>
                    </div>
                    <div>
                        <button class="gemini-btn counter-btn w-full sm:w-auto px-4 py-2 rounded-md" data-law-title="${law.title}">🛡️ Generate Counter-Argument</button>
                        <div class="gemini-output counter-output mt-3"></div>
                    </div>
                    <div>
                        <button class="gemini-btn ethical-dilemma-btn w-full sm:w-auto px-4 py-2 rounded-md" data-law-title="${law.title}">⚠️ Ethical Dilemma</button>
                        <div class="gemini-output ethical-dilemma-output mt-3"></div>
                    </div>
                </div>
            </div>
        `;
    };

    // --- App Initialization and Event Handling ---
    function switchView(viewName) {
        appContainer.innerHTML = views[viewName];
        pageTitle.textContent = `${viewName.charAt(0).toUpperCase() + viewName.slice(1)} | 48 Laws Of Power`;
        
        // Remove all active classes first
        appContainer.classList.remove('home-active', 'laws-active', 'videos-active');
        // Add the specific class for the current view
        appContainer.classList.add(`${viewName}-active`);

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewName);
        });

        if (viewName === 'laws') {
            const lawsDropdown = document.getElementById('laws-dropdown');
            const lawContentContainer = document.getElementById('law-content-container');
            const interplayLawsDropdown = document.getElementById('interplay-laws-dropdown'); // For new feature
            const analyzeInterplayBtn = document.getElementById('analyze-interplay-btn'); // For new feature
            const interplayOutput = document.getElementById('interplay-output'); // For new feature


            lawsDropdown.addEventListener('change', (e) => {
                const selectedIndex = e.target.value;
                if (selectedIndex) {
                    lawContentContainer.innerHTML = renderLawContent(parseInt(selectedIndex, 10));
                } else {
                    lawContentContainer.innerHTML = '';
                }
            });

            // Event listener for the new Law Interplay button
            analyzeInterplayBtn.addEventListener('click', () => {
                const selectedOptions = Array.from(interplayLawsDropdown.selectedOptions)
                                            .map(option => laws[parseInt(option.value, 10)].title);

                if (selectedOptions.length < 2 || selectedOptions.length > 3) {
                    showModal("Please select 2 or 3 laws for Interplay Analysis.");
                    interplayOutput.innerHTML = ''; // Clear previous output
                    return;
                }

                const prompt = `Analyze how the following laws from 'The 48 Laws of Power' interact, complement, or contradict each other in a modern context (e.g., business, social, political). Provide a concise explanation for their combined effect and potential pitfalls:\n\n${selectedOptions.join('\n')}`;
                getGeminiResponse(prompt, interplayOutput);
            });


            lawContentContainer.addEventListener('click', (e) => {
                const button = e.target.closest('.gemini-btn');
                if (!button) return;

                const lawTitle = button.dataset.lawTitle;
                const outputElement = button.nextElementSibling;
                let prompt = '';

                if (button.classList.contains('scenario-btn')) {
                    prompt = `Generate a short, modern-day scenario (e.g., in an office, social media, or business context) that clearly illustrates "${lawTitle}" in action. Keep it concise and to the point.`;
                } else if (button.classList.contains('apply-law-btn')) {
                    prompt = `Present a modern-day scenario where the user needs to apply "${lawTitle}". The scenario should end with a question asking the user how they would apply this law or which specific action they would take based on it.`;
                }
                else if (button.classList.contains('counter-btn')) {
                    prompt = `Provide a strong ethical or practical counter-argument against "${lawTitle}". Alternatively, describe a concise scenario where applying this law would likely backfire.`;
                } else if (button.classList.contains('ethical-dilemma-btn')) {
                    prompt = `Describe a detailed ethical dilemma or a situation where applying "${lawTitle}" rigidly leads to significant negative long-term consequences or moral compromises. Focus on the unintended, detrimental effects.`;
                }
                
                getGeminiResponse(prompt, outputElement);
            });
        }
    }

    topNav.addEventListener('click', (e) => {
        const navBtn = e.target.closest('.nav-btn');
        if (navBtn && navBtn.dataset.view) {
            switchView(navBtn.dataset.view);
        }
    });

    // Initial load
    switchView('home');
});
