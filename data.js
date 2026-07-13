// Lacrosse skills and their associated drills.
const SKILLS = [
  {
    id: "passing",
    name: "Passing",
    icon: "🎯",
    description: "Accuracy, timing, and power on your feeds and outlet passes.",
    drills: [
      {
        name: "Wall Ball",
        summary: "The foundational lacrosse drill for stick skills.",
        instructions:
          "Stand 5-10 yards from a wall and throw/catch continuously, alternating hands, using quick stick and both overhand/sidearm releases.",
        duration: "10-15 min",
        equipment: "Wall, stick, ball",
        difficulty: "Beginner",
      },
      {
        name: "Partner Passing on the Move",
        summary: "Builds accuracy while running instead of standing still.",
        instructions:
          "Two players jog down the field passing back and forth, leading each other so the catch happens in stride. Increase speed each rep.",
        duration: "10 min",
        equipment: "Stick, ball, partner",
        difficulty: "Beginner",
      },
      {
        name: "Triangle Passing",
        summary: "Sharpens quick decision-making and off-hand passing.",
        instructions:
          "Three players form a triangle 10-15 yards apart. Pass quickly around the triangle, then reverse direction, forcing both strong- and off-hand passes.",
        duration: "10 min",
        equipment: "Stick, ball, 2 partners",
        difficulty: "Intermediate",
      },
      {
        name: "Question Mark Drill",
        summary: "Simulates a dodger feeding a cutting teammate.",
        instructions:
          "One player dodges in a question-mark path toward the goal while a cutter times a run to the crease; the dodger feeds the cutter for a finish.",
        duration: "10-15 min",
        equipment: "Stick, ball, goal, 1-2 partners",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "catching",
    name: "Catching",
    icon: "🤾",
    description: "Reliable hands on passes thrown on target, off target, and under pressure.",
    drills: [
      {
        name: "Wall Ball",
        summary: "Repetition builds soft hands and consistent catching form.",
        instructions:
          "Same as passing wall ball, but focus on giving with the stick on the catch to absorb the ball's speed instead of letting it bounce out.",
        duration: "10-15 min",
        equipment: "Wall, stick, ball",
        difficulty: "Beginner",
      },
      {
        name: "Bad Pass Drill",
        summary: "Trains recovery on inaccurate or awkward passes.",
        instructions:
          "A partner intentionally throws passes high, low, and wide. The receiver must adjust their stick and body to catch everything cleanly.",
        duration: "10 min",
        equipment: "Stick, ball, partner",
        difficulty: "Intermediate",
      },
      {
        name: "Catch and Look Drill",
        summary: "Builds the habit of scanning the field immediately after catching.",
        instructions:
          "Receive a pass, then immediately locate and call out a coach's hand signal or a teammate's jersey number before making the next move.",
        duration: "10 min",
        equipment: "Stick, ball, partner or coach",
        difficulty: "Intermediate",
      },
      {
        name: "Two-Ball Catching",
        summary: "Improves reaction time and hand-eye coordination.",
        instructions:
          "A feeder alternates quick throws with two balls to a receiver who must catch and return each one rapidly.",
        duration: "5-10 min",
        equipment: "2 sticks, 2 balls, partner",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "shooting",
    name: "Shooting",
    icon: "🥍",
    description: "Power, accuracy, and quick release from all angles on the crease and perimeter.",
    drills: [
      {
        name: "Quick Stick Shooting",
        summary: "Develops a fast release with minimal wind-up.",
        instructions:
          "A feeder passes to a shooter positioned near the crease, who must catch and shoot in one fluid motion aiming for the corners.",
        duration: "10 min",
        equipment: "Stick, balls, goal, feeder",
        difficulty: "Intermediate",
      },
      {
        name: "Time and Room Shooting",
        summary: "Builds mechanics and power when unpressured.",
        instructions:
          "From 10-12 yards, shoot at each corner of the goal in sequence, focusing on hip rotation and full follow-through.",
        duration: "10-15 min",
        equipment: "Stick, balls, goal",
        difficulty: "Beginner",
      },
      {
        name: "Shooting on the Run",
        summary: "Simulates game-speed finishing after a dodge or cut.",
        instructions:
          "Start at the wing, run toward the goal at full speed while receiving a pass, and shoot in stride without breaking cadence.",
        duration: "10 min",
        equipment: "Stick, balls, goal, feeder",
        difficulty: "Advanced",
      },
      {
        name: "Bounce Shot Drill",
        summary: "Adds a low, hard-to-save shot to your arsenal.",
        instructions:
          "From various angles, practice shooting bounce shots aimed to hit the ground just in front of the crease before rising into the net.",
        duration: "10 min",
        equipment: "Stick, balls, goal",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    id: "dodging",
    name: "Dodging",
    icon: "⚡",
    description: "Beating a defender 1-on-1 with change of speed and direction.",
    drills: [
      {
        name: "Split Dodge Reps",
        summary: "The bread-and-butter dodge for changing direction quickly.",
        instructions:
          "Against air or cones, practice planting, switching hands in front of your body, and accelerating away in the new direction.",
        duration: "10 min",
        equipment: "Stick, ball, cones (optional)",
        difficulty: "Beginner",
      },
      {
        name: "Roll Dodge Reps",
        summary: "Useful for beating a defender who overplays your hands.",
        instructions:
          "Approach a defender or cone, plant your outside foot, and pivot your back into the defender while protecting the stick, then explode away.",
        duration: "10 min",
        equipment: "Stick, ball, cones (optional)",
        difficulty: "Intermediate",
      },
      {
        name: "Change of Direction Ladder",
        summary: "Improves the footwork and burst that make dodges effective.",
        instructions:
          "Run agility ladder patterns (in-out, lateral shuffle, icky shuffle) with a stick in hand, then immediately explode 5 yards upfield.",
        duration: "10 min",
        equipment: "Agility ladder, stick",
        difficulty: "Beginner",
      },
      {
        name: "1v1 Live Dodging",
        summary: "Game-realistic reps against a live defender.",
        instructions:
          "Attacker starts at X or the wing and tries to beat a live defender to the goal using any dodge, finishing with a shot.",
        duration: "10-15 min",
        equipment: "Stick, ball, goal, defender",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "ground-balls",
    name: "Ground Balls",
    icon: "🟢",
    description: "Winning 50/50 balls with proper technique, leverage, and urgency.",
    drills: [
      {
        name: "Bucket Scoop Drill",
        summary: "Isolates clean scooping technique.",
        instructions:
          "Roll the ball out and scoop it while bending your knees (not your back), keeping your stick low and running through the ball.",
        duration: "10 min",
        equipment: "Stick, ball",
        difficulty: "Beginner",
      },
      {
        name: "Box Ground Ball Drill",
        summary: "Trains reaction speed to a bouncing ball from any direction.",
        instructions:
          "Coach rolls or throws the ball into a small box; the player must react, sprint in, scoop, and protect the stick immediately.",
        duration: "10 min",
        equipment: "Stick, ball, cones, coach",
        difficulty: "Intermediate",
      },
      {
        name: "3-Man Ground Ball Scramble",
        summary: "Simulates the physical battle for a contested ground ball.",
        instructions:
          "Three players scramble for one loose ball. Whoever scoops it must protect it and clear away from the other two.",
        duration: "10 min",
        equipment: "Stick, ball, 2 partners",
        difficulty: "Advanced",
      },
      {
        name: "Ground Ball to Outlet",
        summary: "Connects the scoop to a fast, purposeful transition pass.",
        instructions:
          "Scoop a ground ball, take two protective steps, and immediately throw an accurate outlet pass to a moving target.",
        duration: "10 min",
        equipment: "Stick, ball, partner",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    id: "defense",
    name: "Defense",
    icon: "🛡️",
    description: "Positioning, footwork, and stick checks to shut down opposing attackers.",
    drills: [
      {
        name: "Approach and Footwork Drill",
        summary: "Teaches proper closeout angle and body position.",
        instructions:
          "Starting a few yards off, approach an attacker under control, breaking down your steps to stay balanced and force them where you want.",
        duration: "10 min",
        equipment: "Stick, cones, partner",
        difficulty: "Beginner",
      },
      {
        name: "Mirror Drill",
        summary: "Builds lateral quickness and staying in a defensive stance.",
        instructions:
          "Partner up; one player moves side to side and backward while the defender mirrors their movement in a low athletic stance, no stick needed.",
        duration: "5-10 min",
        equipment: "Partner (no equipment needed)",
        difficulty: "Beginner",
      },
      {
        name: "Poke and Lift Check Drill",
        summary: "Sharpens stick check timing without fouling.",
        instructions:
          "Attacker cradles while moving; defender practices timed poke checks and lift checks aimed at the top hand, then resets defensive position.",
        duration: "10 min",
        equipment: "Stick, ball, partner",
        difficulty: "Intermediate",
      },
      {
        name: "1v1 Live Defense",
        summary: "Full-speed test of positioning, footwork, and checks together.",
        instructions:
          "Attacker tries to dodge and score from the wing or X; defender uses proper footwork and body positioning to force a low-percentage shot.",
        duration: "10-15 min",
        equipment: "Stick, ball, goal, attacker",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "face-offs",
    name: "Face-offs",
    icon: "🤺",
    description: "Winning possession at the X with hand speed, leverage, and exit moves.",
    drills: [
      {
        name: "Clamp Technique Drill",
        summary: "Isolates the core face-off move.",
        instructions:
          "From the ready position, practice a quick wrist-snap clamp down onto a stationary ball, focusing on speed over strength.",
        duration: "10 min",
        equipment: "Stick, ball",
        difficulty: "Beginner",
      },
      {
        name: "Rake Technique Drill",
        summary: "Adds a counter move for when the clamp is contested.",
        instructions:
          "Practice raking the ball forward and to the side out of the pile, then immediately releasing your bottom hand to scoop and sprint.",
        duration: "10 min",
        equipment: "Stick, ball",
        difficulty: "Intermediate",
      },
      {
        name: "Whistle Reaction Drill",
        summary: "Trains explosive first-move reaction time.",
        instructions:
          "Set up in the face-off position and have a partner call the whistle at random intervals; react as fast as possible with a clamp or rake.",
        duration: "10 min",
        equipment: "Stick, ball, partner",
        difficulty: "Intermediate",
      },
      {
        name: "Live Exit Moves",
        summary: "Connects winning the draw to actually controlling the ball.",
        instructions:
          "After clamping or raking against a live opponent, practice exit moves (front exit, pull-through) to escape the pile and secure possession.",
        duration: "10-15 min",
        equipment: "Stick, ball, opponent",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "cradling",
    name: "Cradling & Stick Protection",
    icon: "🔒",
    description: "Keeping possession secure while running, dodging, and absorbing contact.",
    drills: [
      {
        name: "Cradle While Running",
        summary: "Builds a consistent, ball-secure cradle at speed.",
        instructions:
          "Sprint the length of the field cradling with a tight wrist motion, keeping the ball in the pocket at all speeds and directions.",
        duration: "10 min",
        equipment: "Stick, ball",
        difficulty: "Beginner",
      },
      {
        name: "Protect the Stick Drill",
        summary: "Simulates a defender trying to dislodge the ball.",
        instructions:
          "A defender applies light-to-moderate check pressure while the ball carrier cradles and shields the stick with their body and off-hand.",
        duration: "10 min",
        equipment: "Stick, ball, defender",
        difficulty: "Intermediate",
      },
      {
        name: "Figure-8 Cradle",
        summary: "Improves ball control while weaving through traffic.",
        instructions:
          "Weave a figure-8 pattern through a set of cones while cradling, switching hands smoothly as you change direction.",
        duration: "5-10 min",
        equipment: "Stick, ball, cones",
        difficulty: "Beginner",
      },
    ],
  },
  {
    id: "agility",
    name: "Footwork & Agility",
    icon: "🏃",
    description: "The speed and body control that make every other skill sharper.",
    drills: [
      {
        name: "Ladder Drills",
        summary: "Builds fast, precise footwork.",
        instructions:
          "Run standard agility ladder patterns (in-out, lateral high knees, icky shuffle), performing each pattern with and without a stick.",
        duration: "10 min",
        equipment: "Agility ladder",
        difficulty: "Beginner",
      },
      {
        name: "Cone Weave Sprint",
        summary: "Trains change-of-direction speed under control.",
        instructions:
          "Set up 5-6 cones in a zigzag; sprint through weaving tightly around each cone, then jog back and repeat.",
        duration: "10 min",
        equipment: "Cones",
        difficulty: "Beginner",
      },
      {
        name: "Reactive Shuffle Drill",
        summary: "Builds the quick-twitch reactions defenders and dodgers both need.",
        instructions:
          "Partner points left/right/back at random; player reacts immediately with a defensive shuffle step in that direction.",
        duration: "5-10 min",
        equipment: "Partner (no equipment needed)",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    id: "iq",
    name: "Field IQ & Communication",
    icon: "🧠",
    description: "Reading the game, making smart decisions, and talking to teammates.",
    drills: [
      {
        name: "Small-Sided Games (3v3)",
        summary: "Forces faster decisions with fewer players to hide behind.",
        instructions:
          "Play 3v3 or 4v4 on a small field. Fewer players means more touches, more decisions, and more communication per minute.",
        duration: "15-20 min",
        equipment: "Sticks, balls, goal, 5+ players",
        difficulty: "Intermediate",
      },
      {
        name: "Called-Slide Defensive Drill",
        summary: "Builds the communication habits that prevent easy goals.",
        instructions:
          "Run a 2-man or 3-man defensive slide package where defenders must verbally call and confirm every slide and recovery.",
        duration: "10-15 min",
        equipment: "Sticks, balls, goal, 4+ players",
        difficulty: "Advanced",
      },
      {
        name: "Film Review Walkthrough",
        summary: "Sharpens off-field understanding of spacing and timing.",
        instructions:
          "Watch film (team or pro) of a specific situation (e.g., 6v6 offense) and walk through the correct reads and rotations as a group.",
        duration: "15-20 min",
        equipment: "Game film, whiteboard",
        difficulty: "Intermediate",
      },
    ],
  },
];
