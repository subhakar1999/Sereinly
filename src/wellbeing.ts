export const articles = [
  {
    id: 'busy-mind', category: 'Anxious thoughts', title: 'When your mind won’t slow down',
    description: 'Give your worries a place to land, and yourself a little space.', minutes: 2, art: 'ripples',
    paragraphs: [
      'A busy mind can make even a quiet room feel crowded. You don’t have to solve every thought as it arrives. Start by noticing one worry and putting it into a sentence.',
      'You might set aside a short daily window to look at your worries. When one arrives outside that window, write it down and gently return to what is in front of you. This is a choice, not a rule you can fail.',
      'During your worry time, ask whether there is a practical next step. If there is, make it small. If there isn’t, it is okay to leave the question unanswered for now. If worry is affecting everyday life, consider support from a qualified professional.'
    ],
    source: 'NHS · Tackling your worries', url: 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/', tool: 'worry', action: 'Try worry time'
  },
  {
    id: 'gentle-breath', category: 'Rest & reset', title: 'You don’t have to take a deep breath',
    description: 'Comfort comes first. A gentler approach to slowing down.', minutes: 2, art: 'bloom',
    paragraphs: [
      'Breathing practice does not need to involve a big inhale or a long hold. Find a position that feels supported and let your breath move at a comfortable depth.',
      'If it helps, notice the air coming in and going out. A soft count can be an anchor, but there is no need to keep up with an animation. You can let your breath find its own rhythm.',
      'If focusing on breathing makes you dizzy or more uneasy, stop the practice and breathe normally. Looking around the room or noticing the chair beneath you is another option. You are allowed to choose a different kind of support.'
    ],
    source: 'NHS · Breathing exercises for stress', url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/', tool: 'pause', action: 'Take a gentle pause'
  },
  {
    id: 'balanced-thought', category: 'Anxious thoughts', title: 'A thought is a starting point',
    description: 'Make room for another perspective, without forced positivity.', minutes: 3, art: 'stones',
    paragraphs: [
      'When something difficult happens, the first explanation that comes to mind can feel like the only one. A thought record is one way to slow down and examine that explanation.',
      'Describe the situation, the thought, and the facts that support it. Then consider what does not fit. What might you say to a friend in the same situation?',
      'A balanced thought does not have to sound cheerful. “I don’t have all the information yet” can be more believable than “Everything will be perfect.” You can stop if the exercise becomes overwhelming and revisit it with a clinician.'
    ],
    source: 'NHS · Thought record exercise', url: 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/thought-record/', tool: 'thought', action: 'Try a thought reflection'
  },
  {
    id: 'evening-space', category: 'Rest & reset', title: 'A softer landing at the end of the day',
    description: 'Small ways to make a little room for rest.', minutes: 2, art: 'moon',
    paragraphs: [
      'Rest can be hard when the day still feels unfinished. A familiar wind-down routine can offer a transition: dim a light, put tomorrow’s tasks on paper, or choose something quiet to do.',
      'Try keeping a regular waking time and making your sleeping space comfortable for you. If you are awake and frustrated, a quiet activity away from bed may help you return when you feel sleepy.',
      'Sleep tips are not a treatment for every sleep problem. If difficulties persist or disrupt your daily life, talk with a healthcare professional. Sudden changes in sleep alongside unusually high energy or marked mood changes deserve clinical attention.'
    ],
    source: 'NHS · How to sleep better', url: 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/', tool: 'note', action: 'Set a thought down'
  }
];

export const paths = [
  {name:'Find calm', label:'A busy, worried mind', group:'Rest & reset', tool:'breathing', x:23, y:26, description:'A comfortable rhythm to return to, one breath at a time.', action:'Open breathing space'},
  {name:'Feel grounded', label:'A moment that feels too much', group:'Rest & reset', tool:'grounding', x:71, y:21, description:'Notice your surroundings with a gentle, five-sense practice.', action:'Try sensory grounding'},
  {name:'Make space', label:'Thoughts that keep circling', group:'Rest & reset', tool:'thought', x:83, y:61, description:'Explore a thought and make room for a fairer perspective.', action:'Open a thought reflection'},
  {name:'Find focus', label:'An overwhelming next step', group:'Focus & energy', tool:'focus', x:62, y:83, description:'Turn a big task into editable, manageable steps.', action:'Break a task down'},
  {name:'Go gently', label:'Low energy or burnout', group:'Focus & energy', tool:'spoons', x:26, y:78, description:'Choose a tiny act of care that matches the energy you have.', action:'Explore the spoon menu'},
  {name:'Ride a wave', label:'An urge I want to sit with', group:'Rest & reset', tool:'urge', x:13, y:52, description:'Give yourself a little time to notice an urge without acting on it.', action:'Open urge surfing'}
];
