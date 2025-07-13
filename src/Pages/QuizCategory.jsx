import React ,{useState} from "react";
import {useLocation, Link} from "react-router-dom";

 const quiz_data = [
    {
      "category": "Physics",
      "Image": "https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
      "questions": [
        {"question": "What is the unit of force?", "options": ["Newton", "Joule", "Watt", "Tesla"], "answer": "Newton", "difficulty_level": "Easy"},
        {"question": "Which law states that for every action, there is an equal and opposite reaction?", "options": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"], "answer": "Newton's Third Law", "difficulty_level": "Medium"},
        {"question": "What is the speed of light?", "options": ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"], "answer": "300,000 km/s", "difficulty_level": "Hard"},
        {"question": "Who is known as the father of modern physics?", "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], "answer": "Albert Einstein", "difficulty_level": "Medium"},
        {"question": "What is the SI unit of electric charge?", "options": ["Coulomb", "Ampere", "Volt", "Ohm"], "answer": "Coulomb", "difficulty_level": "Easy"},
        {"question": "What does E = mc^2 represent?", "options": ["Energy and mass equivalence", "Force and motion", "Energy and time relation", "Electric field equation"], "answer": "Energy and mass equivalence", "difficulty_level": "Hard"},
        {"question": "What is the principle behind a transformer?", "options": ["Electromagnetic induction", "Magnetic force", "Gravitational force", "Capacitance"], "answer": "Electromagnetic induction", "difficulty_level": "Medium"},
        {"question": "Which subatomic particle has a negative charge?", "options": ["Proton", "Electron", "Neutron", "Photon"], "answer": "Electron", "difficulty_level": "Easy"},
        {"question": "What is the term for the change of state from liquid to gas?", "options": ["Evaporation", "Condensation", "Freezing", "Sublimation"], "answer": "Evaporation", "difficulty_level": "Medium"},
        {"question": "What is the process of energy transfer in a solid by vibrations of particles called?", "options": ["Conduction", "Convection", "Radiation", "Insulation"], "answer": "Conduction", "difficulty_level": "Easy"},
        {"question": "What is the unit of electric current?", "options": ["Ampere", "Volt", "Ohm", "Tesla"], "answer": "Ampere", "difficulty_level": "Easy"},
        {"question": "What is the force that causes objects to fall to the Earth?", "options": ["Gravitational force", "Magnetic force", "Centrifugal force", "Frictional force"], "answer": "Gravitational force", "difficulty_level": "Easy"},
        {"question": "What type of waves are light waves?", "options": ["Transverse", "Longitudinal", "Both", "None"], "answer": "Transverse", "difficulty_level": "Medium"},
        {"question": "What is the boiling point of water at sea level?", "options": ["100°C", "90°C", "110°C", "120°C"], "answer": "100°C", "difficulty_level": "Easy"},
        {"question": "What does the law of conservation of energy state?", "options": ["Energy cannot be created or destroyed", "Energy can be destroyed", "Energy can be created", "Energy can change shape"], "answer": "Energy cannot be created or destroyed", "difficulty_level": "Medium"},
        {"question": "Which type of radiation is used in medical imaging?", "options": ["X-rays", "Alpha", "Gamma", "Beta"], "answer": "X-rays", "difficulty_level": "Medium"},
        {"question": "Who developed the laws of motion?", "options": ["Galileo", "Einstein", "Newton", "Tesla"], "answer": "Newton", "difficulty_level": "Medium"},
        {"question": "What is the main difference between a conductor and an insulator?", "options": ["Conductor allows electricity, insulator does not", "Insulator allows electricity, conductor does not", "Both conduct electricity", "None of the above"], "answer": "Conductor allows electricity, insulator does not", "difficulty_level": "Medium"},
        {"question": "What is the primary use of a capacitor?", "options": ["Store electrical energy", "Control current", "Amplify signals", "Resist current"], "answer": "Store electrical energy", "difficulty_level": "Hard"},
        {"question": "What phenomenon causes the rainbow effect?", "options": ["Refraction", "Reflection", "Diffraction", "Absorption"], "answer": "Refraction", "difficulty_level": "Medium"},
        {"question": "What is the unit of power?", "options": ["Watt", "Joule", "Newton", "Volt"], "answer": "Watt", "difficulty_level": "Easy"},
        {"question": "What is the primary function of the ozone layer?", "options": ["Absorb UV radiation", "Produce oxygen", "Regulate temperature", "Create weather patterns"], "answer": "Absorb UV radiation", "difficulty_level": "Medium"},
        {"question": "What does a simple circuit consist of?", "options": ["Battery, wire, and resistor", "Battery, wire, and light bulb", "Wire and bulb", "Wire and battery only"], "answer": "Battery, wire, and light bulb", "difficulty_level": "Easy"},
        {"question": "What does the symbol 'Ω' stand for?", "options": ["Ohm", "Omega", "Oxygen", "Oxygen Molecule"], "answer": "Ohm", "difficulty_level": "Easy"},
        {"question": "Which particle has no charge?", "options": ["Electron", "Proton", "Neutron", "Photon"], "answer": "Neutron", "difficulty_level": "Medium"},
        {"question": "What happens to the wavelength of light when it moves from one medium to another?", "options": ["It changes", "It stays the same", "It doubles", "It stops"], "answer": "It changes", "difficulty_level": "Medium"},
        {"question": "What is a light year?", "options": ["Distance light travels in one year", "Time taken for light to travel a year", "A unit of time", "A unit of speed"], "answer": "Distance light travels in one year", "difficulty_level": "Medium"},
        {"question": "What does an ammeter measure?", "options": ["Current", "Voltage", "Resistance", "Capacitance"], "answer": "Current", "difficulty_level": "Easy"},
        {"question": "What is the formula for force?", "options": ["F = ma", "F = mv", "F = m/a", "F = ma^2"], "answer": "F = ma", "difficulty_level": "Easy"},
        {"question": "Which is the most abundant gas in Earth's atmosphere?", "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"], "answer": "Nitrogen", "difficulty_level": "Medium"},
        {"question": "Who invented the first light bulb?", "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Michael Faraday"], "answer": "Thomas Edison", "difficulty_level": "Medium"},
        {"question": "What is the temperature at which water freezes?", "options": ["0°C", "-1°C", "32°F", "100°C"], "answer": "0°C", "difficulty_level": "Easy"},
        {"question": "What is the center of an atom called?", "options": ["Nucleus", "Electron", "Proton", "Neutron"], "answer": "Nucleus", "difficulty_level": "Easy"},
        {"question": "What type of energy is stored in a battery?", "options": ["Chemical energy", "Electrical energy", "Mechanical energy", "Solar energy"], "answer": "Chemical energy", "difficulty_level": "Medium"},
        {"question": "Which element is used in the filament of light bulbs?", "options": ["Tungsten", "Iron", "Copper", "Aluminum"], "answer": "Tungsten", "difficulty_level": "Hard"},
        {"question": "What is the main function of a fuse in an electrical circuit?", "options": ["Prevent overload", "Store electricity", "Increase current", "Control resistance"], "answer": "Prevent overload", "difficulty_level": "Medium"}
      ]
    },
    {
      "category": "English",
      "Image": "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
      "questions": [
        {"question": "What is the past tense of 'go'?", "options": ["Went", "Gone", "Going", "Goes"], "answer": "Went", "difficulty_level": "Easy"},
        {"question": "Which of the following is an example of a simile?", "options": ["The cat is as fast as lightning.", "The cat ran.", "The cat was fast.", "The cat is in the house."], "answer": "The cat is as fast as lightning.", "difficulty_level": "Medium"},
        {"question": "Who wrote 'Romeo and Juliet'?", "options": ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"], "answer": "William Shakespeare", "difficulty_level": "Easy"},
        {"question": "What is the antonym of 'happy'?", "options": ["Sad", "Excited", "Angry", "Joyful"], "answer": "Sad", "difficulty_level": "Easy"},
        {"question": "Which of these words is a noun?", "options": ["Quickly", "Jump", "Happiness", "Run"], "answer": "Happiness", "difficulty_level": "Medium"},
        {"question": "What is the plural form of 'child'?", "options": ["Children", "Childs", "Childes", "Childer"], "answer": "Children", "difficulty_level": "Easy"},
        {"question": "Which of the following is an example of a metaphor?", "options": ["Her heart is a cold stone.", "She is as cold as ice.", "She is running like a deer.", "The wind whispered."], "answer": "Her heart is a cold stone.", "difficulty_level": "Medium"},
        {"question": "What is the opposite of 'dark'?", "options": ["Bright", "Light", "Clear", "White"], "answer": "Light", "difficulty_level": "Easy"},
        {"question": "Which of these sentences is correct?", "options": ["He don't like pizza.", "He doesn't likes pizza.", "He doesn't like pizza.", "He don't likes pizza."], "answer": "He doesn't like pizza.", "difficulty_level": "Medium"},
        {"question": "What is a synonym of 'quick'?", "options": ["Slow", "Fast", "Heavy", "Lazy"], "answer": "Fast", "difficulty_level": "Easy"},
        {"question": "What type of word is 'run'?", "options": ["Noun", "Verb", "Adjective", "Adverb"], "answer": "Verb", "difficulty_level": "Easy"},
        {"question": "Which of these words is an adverb?", "options": ["Jump", "Quickly", "Big", "Red"], "answer": "Quickly", "difficulty_level": "Medium"},
        {"question": "What is the past tense of 'see'?", "options": ["Saw", "Seen", "See", "Sawen"], "answer": "Saw", "difficulty_level": "Easy"},
        {"question": "What does the word 'benevolent' mean?", "options": ["Kind", "Cruel", "Angry", "Generous"], "answer": "Kind", "difficulty_level": "Medium"},
        {"question": "Which of these is a sentence fragment?", "options": ["He went to the store.", "While he was going to the store.", "She likes pizza.", "We went to the movies."], "answer": "While he was going to the store.", "difficulty_level": "Medium"},
        {"question": "What is the future tense of 'write'?", "options": ["Wrote", "Written", "Writing", "Will write"], "answer": "Will write", "difficulty_level": "Easy"},
        {"question": "Which of these is a preposition?", "options": ["Over", "Run", "He", "Quickly"], "answer": "Over", "difficulty_level": "Easy"},
        {"question": "What is the meaning of 'procrastinate'?", "options": ["To delay", "To finish quickly", "To begin", "To enjoy"], "answer": "To delay", "difficulty_level": "Medium"},
        {"question": "Which of these sentences is correct?", "options": ["She are going to the market.", "She is going to market.", "She is go to the market.", "She are go to the market."], "answer": "She is going to the market.", "difficulty_level": "Medium"},
        {"question": "Which of the following is a comparative adjective?", "options": ["Better", "Good", "Best", "Well"], "answer": "Better", "difficulty_level": "Medium"},
        {"question": "What is the opposite of 'rich'?", "options": ["Poor", "Wealthy", "Happy", "Greedy"], "answer": "Poor", "difficulty_level": "Easy"},
        {"question": "Which of these words is an adjective?", "options": ["Quickly", "Jump", "Fast", "Go"], "answer": "Fast", "difficulty_level": "Medium"},
        {"question": "What is the plural of 'man'?", "options": ["Men", "Mans", "Manes", "Menn"], "answer": "Men", "difficulty_level": "Easy"},
        {"question": "What is a direct object?", "options": ["A noun that receives the action", "A verb", "A preposition", "An adjective"], "answer": "A noun that receives the action", "difficulty_level": "Medium"},
        {"question": "Which of these words is a conjunction?", "options": ["But", "She", "Blue", "Slow"], "answer": "But", "difficulty_level": "Easy"}
      ]
    },
    {
      "category": "Biology",
      "Image": "https://t4.ftcdn.net/jpg/02/35/71/13/360_F_235711378_x8BsTR14c7Iu9myWbXVBk2DHf7dHsdgg.jpg",
      "questions": [
        {"question": "What is the powerhouse of the cell?", "options": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"], "answer": "Mitochondria", "difficulty_level": "Easy"},
        {"question": "What is the basic unit of life?", "options": ["Atom", "Cell", "Tissue", "Organ"], "answer": "Cell", "difficulty_level": "Easy"},
        {"question": "Which vitamin is produced by the skin when exposed to sunlight?", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "answer": "Vitamin D", "difficulty_level": "Medium"},
        {"question": "What is the largest organ in the human body?", "options": ["Heart", "Liver", "Skin", "Brain"], "answer": "Skin", "difficulty_level": "Medium"},
        {"question": "What is the main function of red blood cells?", "options": ["Fight infection", "Carry oxygen", "Digest food", "Send signals"], "answer": "Carry oxygen", "difficulty_level": "Easy"},
        {"question": "Which part of the brain controls memory?", "options": ["Cerebellum", "Hippocampus", "Medulla", "Cerebrum"], "answer": "Hippocampus", "difficulty_level": "Medium"},
        {"question": "What is the process by which plants make their own food?", "options": ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], "answer": "Photosynthesis", "difficulty_level": "Easy"},
        {"question": "What is the term for the change of state from liquid to gas?", "options": ["Evaporation", "Condensation", "Freezing", "Sublimation"], "answer": "Evaporation", "difficulty_level": "Medium"},
        {"question": "What is the primary function of the digestive system?", "options": ["To break down food", "To circulate blood", "To remove waste", "To regulate temperature"], "answer": "To break down food", "difficulty_level": "Easy"},
        {"question": "Which structure is responsible for the exchange of gases in the lungs?", "options": ["Alveoli", "Bronchi", "Trachea", "Larynx"], "answer": "Alveoli", "difficulty_level": "Easy"},
        {"question": "What is the term for a species' complete role in an ecosystem?", "options": ["Habitat", "Community", "Niche", "Biome"], "answer": "Niche", "difficulty_level": "Medium"},
        {"question": "What type of blood vessels carry oxygenated blood away from the heart?", "options": ["Veins", "Arteries", "Capillaries", "Lymphatics"], "answer": "Arteries", "difficulty_level": "Easy"},
        {"question": "What is the process of cell division that results in two identical daughter cells?", "options": ["Meiosis", "Mitosis", "Binary fission", "Transcription"], "answer": "Mitosis", "difficulty_level": "Medium"},
        {"question": "What is the term for the genetic material that is passed from parent to offspring?", "options": ["RNA", "DNA", "Protein", "Chlorophyll"], "answer": "DNA", "difficulty_level": "Easy"},
        {"question": "What part of the plant is responsible for absorbing water?", "options": ["Stem", "Leaf", "Root", "Flower"], "answer": "Root", "difficulty_level": "Easy"},
        {"question": "Which organism is the largest living organism?", "options": ["Blue whale", "Giant sequoia", "Honey fungus", "African elephant"], "answer": "Honey fungus", "difficulty_level": "Medium"},
        {"question": "Which part of the brain is responsible for regulating heartbeat?", "options": ["Cerebrum", "Medulla oblongata", "Cerebellum", "Thalamus"], "answer": "Medulla oblongata", "difficulty_level": "Medium"},
        {"question": "What process allows plants to take in carbon dioxide from the air?", "options": ["Photosynthesis", "Respiration", "Transpiration", "Evaporation"], "answer": "Photosynthesis", "difficulty_level": "Easy"},
        {"question": "Which organ produces insulin?", "options": ["Heart", "Pancreas", "Liver", "Kidney"], "answer": "Pancreas", "difficulty_level": "Medium"},
        {"question": "What is the first stage of human embryonic development?", "options": ["Zygote", "Fetus", "Blastocyst", "Embryo"], "answer": "Zygote", "difficulty_level": "Medium"},
        {"question": "Which of these is NOT a part of the central nervous system?", "options": ["Spinal cord", "Brain", "Nerves", "Medulla"], "answer": "Nerves", "difficulty_level": "Medium"},
        {"question": "What is the primary function of white blood cells?", "options": ["To carry oxygen", "To fight infection", "To form clots", "To transport nutrients"], "answer": "To fight infection", "difficulty_level": "Easy"},
        {"question": "What is the term for the conversion of glucose to energy in cells?", "options": ["Fermentation", "Respiration", "Photosynthesis", "Digestion"], "answer": "Respiration", "difficulty_level": "Easy"},
        {"question": "Which organ in the human body is primarily responsible for detoxification?", "options": ["Kidney", "Heart", "Liver", "Lungs"], "answer": "Liver", "difficulty_level": "Medium"},
        {"question": "What is the process by which organisms maintain a stable internal environment?", "options": ["Homeostasis", "Metabolism", "Mitosis", "Photosynthesis"], "answer": "Homeostasis", "difficulty_level": "Medium"},
        {"question": "What is the smallest unit of life?", "options": ["Atom", "Cell", "Molecule", "Organism"], "answer": "Cell", "difficulty_level": "Easy"},
        {"question": "Which of the following is an example of asexual reproduction?", "options": ["Binary fission", "Mating", "Pollination", "Cross-fertilization"], "answer": "Binary fission", "difficulty_level": "Medium"},
        {"question": "What is the term for the process by which plants lose water through evaporation?", "options": ["Transpiration", "Absorption", "Condensation", "Evaporation"], "answer": "Transpiration", "difficulty_level": "Medium"},
        {"question": "What is the largest artery in the human body?", "options": ["Aorta", "Carotid", "Pulmonary", "Femoral"], "answer": "Aorta", "difficulty_level": "Easy"},
        {"question": "Which type of muscle is responsible for voluntary movement?", "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of the above"], "answer": "Skeletal muscle", "difficulty_level": "Medium"},
        {"question": "What is the term for the variety of life on Earth?", "options": ["Biodiversity", "Ecology", "Evolution", "Genetics"], "answer": "Biodiversity", "difficulty_level": "Medium"},
        {"question": "Which vitamin is primarily found in citrus fruits?", "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], "answer": "Vitamin C", "difficulty_level": "Easy"},
        {"question": "What is the function of chlorophyll in plants?", "options": ["Absorb water", "Absorb sunlight", "Store energy", "Produce oxygen"], "answer": "Absorb sunlight", "difficulty_level": "Medium"},
        {"question": "Which process creates new cells in organisms?", "options": ["Mitosis", "Meiosis", "Cell division", "All of the above"], "answer": "Mitosis", "difficulty_level": "Medium"},
        {"question": "Which hormone regulates sleep in humans?", "options": ["Insulin", "Cortisol", "Melatonin", "Adrenaline"], "answer": "Melatonin", "difficulty_level": "Medium"}
      ]
    },
    {
      "category": "Chemistry",
      "Image": "https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww",

      "questions": [
        {"question": "What is the chemical symbol for water?", "options": ["H2O", "O2", "CO2", "H2O2"], "answer": "H2O", "difficulty_level": "Easy"},
        {"question": "What is the atomic number of Carbon?", "options": ["6", "12", "8", "14"], "answer": "6", "difficulty_level": "Easy"},
        {"question": "Which gas is necessary for combustion?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "answer": "Oxygen", "difficulty_level": "Medium"},
        {"question": "What is the most common element in the Earth's crust?", "options": ["Iron", "Oxygen", "Silicon", "Aluminum"], "answer": "Oxygen", "difficulty_level": "Medium"},
        {"question": "What is the pH level of pure water?", "options": ["7", "0", "14", "1"], "answer": "7", "difficulty_level": "Easy"},
        {"question": "What is the chemical symbol for gold?", "options": ["Au", "Ag", "Pb", "Fe"], "answer": "Au", "difficulty_level": "Easy"},
        {"question": "What is the process of separating a solid from a liquid by evaporation?", "options": ["Filtration", "Distillation", "Condensation", "Crystallization"], "answer": "Evaporation", "difficulty_level": "Medium"},
        {"question": "What is the common name for sodium chloride?", "options": ["Salt", "Sugar", "Baking soda", "Vinegar"], "answer": "Salt", "difficulty_level": "Easy"},
        {"question": "What is the periodic table arrangement based on?", "options": ["Atomic mass", "Atomic number", "Density", "Boiling point"], "answer": "Atomic number", "difficulty_level": "Easy"},
        {"question": "What is the chemical formula for methane?", "options": ["CH4", "C2H6", "CO2", "C6H12O6"], "answer": "CH4", "difficulty_level": "Medium"},
        {"question": "Which of these is an example of a noble gas?", "options": ["Oxygen", "Nitrogen", "Helium", "Carbon"], "answer": "Helium", "difficulty_level": "Medium"},
        {"question": "What is the smallest unit of an element?", "options": ["Atom", "Molecule", "Ion", "Electron"], "answer": "Atom", "difficulty_level": "Easy"},
        {"question": "What is the process of a substance changing from a solid to a liquid?", "options": ["Sublimation", "Melting", "Freezing", "Boiling"], "answer": "Melting", "difficulty_level": "Easy"},
        {"question": "What is the name for a positively charged ion?", "options": ["Cation", "Anion", "Proton", "Electron"], "answer": "Cation", "difficulty_level": "Medium"},
        {"question": "Which of the following is an example of an acid?", "options": ["Acetic acid", "Sodium hydroxide", "Ammonia", "Water"], "answer": "Acetic acid", "difficulty_level": "Medium"},
        {"question": "Which element is commonly used in batteries?", "options": ["Lithium", "Oxygen", "Iron", "Carbon"], "answer": "Lithium", "difficulty_level": "Medium"},
        {"question": "What is the main component of natural gas?", "options": ["Methane", "Ethane", "Butane", "Propane"], "answer": "Methane", "difficulty_level": "Medium"},
        {"question": "Which molecule is responsible for carrying genetic information?", "options": ["DNA", "RNA", "Proteins", "Lipids"], "answer": "DNA", "difficulty_level": "Medium"},
        {"question": "What is the chemical formula for hydrochloric acid?", "options": ["HCl", "H2SO4", "NaOH", "CO2"], "answer": "HCl", "difficulty_level": "Medium"},
        {"question": "Which of these elements is a metal?", "options": ["Oxygen", "Carbon", "Gold", "Nitrogen"], "answer": "Gold", "difficulty_level": "Easy"},
        {"question": "What is the term for the amount of matter in an object?", "options": ["Weight", "Density", "Mass", "Volume"], "answer": "Mass", "difficulty_level": "Easy"},
        {"question": "What is the chemical name for table salt?", "options": ["Sodium chloride", "Potassium nitrate", "Magnesium sulfate", "Calcium carbonate"], "answer": "Sodium chloride", "difficulty_level": "Easy"},
        {"question": "What is the primary component of the Earth's atmosphere?", "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], "answer": "Nitrogen", "difficulty_level": "Medium"},
        {"question": "Which of these is a property of metals?", "options": ["Good conductor of heat", "Brittle", "Transparent", "Poor conductor of electricity"], "answer": "Good conductor of heat", "difficulty_level": "Medium"}
      ]
    },
    {
      "category": "History",
      "Image": "https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=",
      "questions": [
        {"question": "Who was the first president of the United States?", "options": ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], "answer": "George Washington", "difficulty_level": "Easy"},
        {"question": "In which year did World War II end?", "options": ["1945", "1939", "1918", "1950"], "answer": "1945", "difficulty_level": "Medium"},
        {"question": "Which empire was ruled by Julius Caesar?", "options": ["Roman Empire", "Ottoman Empire", "Mongol Empire", "British Empire"], "answer": "Roman Empire", "difficulty_level": "Medium"},
        {"question": "Who discovered America?", "options": ["Christopher Columbus", "Marco Polo", "Leif Erikson", "Vasco da Gama"], "answer": "Christopher Columbus", "difficulty_level": "Medium"},
        {"question": "What was the name of the ship that brought the Pilgrims to America in 1620?", "options": ["Mayflower", "Santa Maria", "Titanic", "Endeavour"], "answer": "Mayflower", "difficulty_level": "Easy"},
        {"question": "Which country was the first to land on the moon?", "options": ["USA", "Russia", "China", "India"], "answer": "USA", "difficulty_level": "Medium"},
        {"question": "Who wrote the Declaration of Independence?", "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"], "answer": "Thomas Jefferson", "difficulty_level": "Medium"},
        {"question": "What was the Cold War?", "options": ["Conflict between USA and USSR", "Conflict between USA and Japan", "Conflict between Germany and Russia", "Conflict between USA and China"], "answer": "Conflict between USA and USSR", "difficulty_level": "Medium"},
        {"question": "In which year did the Titanic sink?", "options": ["1912", "1920", "1898", "1930"], "answer": "1912", "difficulty_level": "Medium"},
        {"question": "Who was the first woman to fly solo across the Atlantic Ocean?", "options": ["Amelia Earhart", "Harriet Tubman", "Clara Barton", "Helen Keller"], "answer": "Amelia Earhart", "difficulty_level": "Medium"},
        {"question": "Which was the first civilization to develop writing?", "options": ["Sumerians", "Egyptians", "Indus Valley", "Maya"], "answer": "Sumerians", "difficulty_level": "Medium"},
        {"question": "Who was the last queen of Egypt?", "options": ["Cleopatra", "Nefertiti", "Hatshepsut", "Elizabeth I"], "answer": "Cleopatra", "difficulty_level": "Medium"},
        {"question": "Who invented the telephone?", "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"], "answer": "Alexander Graham Bell", "difficulty_level": "Medium"},
        {"question": "What event started World War I?", "options": ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Attack on Pearl Harbor", "The Fall of the Berlin Wall"], "answer": "Assassination of Archduke Franz Ferdinand", "difficulty_level": "Medium"},
        {"question": "In what year did the Berlin Wall fall?", "options": ["1989", "1969", "2001", "1975"], "answer": "1989", "difficulty_level": "Medium"},
        {"question": "Which was the first country to give women the right to vote?", "options": ["New Zealand", "United States", "United Kingdom", "France"], "answer": "New Zealand", "difficulty_level": "Medium"},
        {"question": "Who was the first emperor of China?", "options": ["Qin Shi Huang", "Han Wu Di", "Kublai Khan", "Emperor Yang"], "answer": "Qin Shi Huang", "difficulty_level": "Medium"},
        {"question": "What year did the French Revolution begin?", "options": ["1789", "1799", "1800", "1776"], "answer": "1789", "difficulty_level": "Medium"},
        {"question": "Which ancient civilization built the pyramids?", "options": ["Egyptians", "Romans", "Greeks", "Mayans"], "answer": "Egyptians", "difficulty_level": "Easy"},
        {"question": "Who was the first emperor of Rome?", "options": ["Julius Caesar", "Augustus", "Nero", "Constantine"], "answer": "Augustus", "difficulty_level": "Medium"},
        {"question": "What is the Magna Carta?", "options": ["A document limiting the power of the king", "A treaty between England and France", "A law about taxes", "The founding document of the United States"], "answer": "A document limiting the power of the king", "difficulty_level": "Medium"},
        {"question": "Which empire ruled most of Europe and the Middle East for centuries?", "options": ["Roman Empire", "Ottoman Empire", "Byzantine Empire", "Mongol Empire"], "answer": "Roman Empire", "difficulty_level": "Medium"},
        {"question": "Who was the leader of the Soviet Union during World War II?", "options": ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Nikita Khrushchev"], "answer": "Joseph Stalin", "difficulty_level": "Medium"},
        {"question": "Which battle was fought on June 6, 1944?", "options": ["Battle of the Bulge", "Battle of Normandy", "Battle of Stalingrad", "Battle of Midway"], "answer": "Battle of Normandy", "difficulty_level": "Medium"},
        {"question": "Who was the first African American president of the United States?", "options": ["Barack Obama", "George Washington", "Abraham Lincoln", "Martin Luther King Jr."], "answer": "Barack Obama", "difficulty_level": "Medium"},
        {"question": "Which country was the birthplace of the Renaissance?", "options": ["Italy", "France", "Germany", "Spain"], "answer": "Italy", "difficulty_level": "Medium"},
        {"question": "What year did the United States gain independence?", "options": ["1776", "1781", "1790", "1812"], "answer": "1776", "difficulty_level": "Easy"},
        {"question": "Who was the leader of Nazi Germany during World War II?", "options": ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Francisco Franco"], "answer": "Adolf Hitler", "difficulty_level": "Medium"},
        {"question": "What year did the American Civil War end?", "options": ["1865", "1776", "1900", "1840"], "answer": "1865", "difficulty_level": "Medium"},
        {"question": "What was the name of the first manned mission to land on the moon?", "options": ["Apollo 11", "Apollo 13", "Gemini 4", "Luna 2"], "answer": "Apollo 11", "difficulty_level": "Medium"},
        {"question": "Which empire conquered most of the known world in the 4th century BC?", "options": ["Roman Empire", "Mongol Empire", "Persian Empire", "Alexander's Empire"], "answer": "Alexander's Empire", "difficulty_level": "Medium"},
        {"question": "Which country was the first to grant independence to its colonies?", "options": ["United Kingdom", "United States", "France", "Spain"], "answer": "United Kingdom", "difficulty_level": "Medium"},
        {"question": "What was the name of the first artificial satellite?", "options": ["Sputnik", "Explorer", "Apollo", "Vanguard"], "answer": "Sputnik", "difficulty_level": "Medium"},
        {"question": "Who was the leader of the Indian independence movement?", "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh", "Subhas Chandra Bose"], "answer": "Mahatma Gandhi", "difficulty_level": "Medium"}
      ]
    },
    {
      "category": "Computer",
      "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZfOPpD8TES9LYS2S_KF057K5ptvLP479cQ&s",
      "questions": [
        {"question": "What does 'CPU' stand for?", "options": ["Central Processing Unit", "Central Processor Unit", "Computer Personal Unit", "Central Performance Unit"], "answer": "Central Processing Unit", "difficulty_level": "Easy"},
        {"question": "Which programming language is known as the 'mother of all languages'?", "options": ["C", "Java", "Python", "Assembly"], "answer": "C", "difficulty_level": "Medium"},
        {"question": "Which company developed the Windows operating system?", "options": ["Apple", "Microsoft", "IBM", "Google"], "answer": "Microsoft", "difficulty_level": "Easy"},
        {"question": "What is the primary function of an operating system?", "options": ["Manage hardware", "Provide software", "Create websites", "Run applications"], "answer": "Manage hardware", "difficulty_level": "Medium"},
        {"question": "What does 'HTTP' stand for?", "options": ["HyperText Transfer Protocol", "HyperTool Transfer Protocol", "HyperText Technical Protocol", "Home Transfer Text Protocol"], "answer": "HyperText Transfer Protocol", "difficulty_level": "Easy"},
        {"question": "What is the full form of 'RAM'?", "options": ["Random Access Memory", "Read Access Memory", "Random Algorithmic Memory", "Rough Access Memory"], "answer": "Random Access Memory", "difficulty_level": "Easy"},
        {"question": "What is the primary function of the hard drive?", "options": ["Store data", "Process data", "Display data", "Transmit data"], "answer": "Store data", "difficulty_level": "Medium"},
        {"question": "Which device is used to input text into a computer?", "options": ["Mouse", "Keyboard", "Printer", "Monitor"], "answer": "Keyboard", "difficulty_level": "Easy"},
        {"question": "Which of these is a search engine?", "options": ["Google", "Windows", "Apple", "Linux"], "answer": "Google", "difficulty_level": "Easy"},
        {"question": "Which of the following is an example of an input device?", "options": ["Monitor", "Printer", "Scanner", "Speaker"], "answer": "Scanner", "difficulty_level": "Medium"},
        {"question": "What is the most commonly used programming language for web development?", "options": ["JavaScript", "Java", "Python", "Ruby"], "answer": "JavaScript", "difficulty_level": "Medium"},
        {"question": "What does 'URL' stand for?", "options": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Language", "Uniform Resource List"], "answer": "Uniform Resource Locator", "difficulty_level": "Easy"},
        {"question": "Which company developed the iPhone?", "options": ["Microsoft", "Apple", "Google", "Samsung"], "answer": "Apple", "difficulty_level": "Easy"},
        {"question": "What does 'BIOS' stand for?", "options": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"], "answer": "Basic Input Output System", "difficulty_level": "Medium"},
        {"question": "What is the term for malicious software?", "options": ["Malware", "Spyware", "Virus", "Adware"], "answer": "Malware", "difficulty_level": "Medium"},
        {"question": "Which technology is used for wireless communication?", "options": ["Bluetooth", "USB", "Ethernet", "HDMI"], "answer": "Bluetooth", "difficulty_level": "Medium"},
        {"question": "What is an IP address?", "options": ["Internet Protocol address", "Internal Process address", "Information Protocol address", "Internet Personal address"], "answer": "Internet Protocol address", "difficulty_level": "Medium"},
        {"question": "What is the primary function of a firewall?", "options": ["Monitor incoming traffic", "Store data", "Manage devices", "Connect to networks"], "answer": "Monitor incoming traffic", "difficulty_level": "Medium"},
        {"question": "What does 'RAM' stand for?", "options": ["Random Access Memory", "Read-Only Access Memory", "Real-time Access Memory", "Rapid Access Memory"], "answer": "Random Access Memory", "difficulty_level": "Easy"},
        {"question": "Which of the following is a type of computer virus?", "options": ["Trojan", "Firewall", "Router", "Switch"], "answer": "Trojan", "difficulty_level": "Medium"},
        {"question": "What is the main function of a database?", "options": ["Store and manage data", "Display data", "Process data", "Connect to the internet"], "answer": "Store and manage data", "difficulty_level": "Medium"},
        {"question": "What type of software is Windows?", "options": ["Operating System", "Antivirus", "Utility Software", "Application Software"], "answer": "Operating System", "difficulty_level": "Easy"},
        {"question": "What does 'HTML' stand for?", "options": ["HyperText Markup Language", "Hyper Tool Markup Language", "Home Tool Markup Language", "High-tech Markup Language"], "answer": "HyperText Markup Language", "difficulty_level": "Medium"}
      ]
    }
  ]
  function QuizCategory() {
    const [SelectOption, setSelectOption] = useState();
    const [QuizCategory, setCategory] = useState();
    const questionOptions = [5, 10, 15, 20, 25, 30];

    return (
      
      <div className=" text-center text-white space-y-5 bg-black">
      
        
        <h2>Quiz Categories</h2>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Select Category</p>
          </label>
          <select
            value={QuizCategory || ""}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <option value="" disabled>
              -- Select a Category --
            </option>
            {quiz_data.map((category, idx) => (
              <option key={idx} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Select Number of Questions</p>
          </label>
          <select
            value={SelectOption || ""}
            onChange={(e) => setSelectOption(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <option value="" disabled>
              -- Select Number of Questions --
            </option>
            {questionOptions.map((num, idx) => (
              <option key={idx} value={num}>
                {num} Questions
              </option>
            ))}
          </select>
        </div>
        <ul className="flex flex-wrap justify-center gap-6">
          {quiz_data
            .filter((cat) => !QuizCategory || cat.category === QuizCategory)
            .map((category, index) => (
              <li key={index}>
                <Link
                  to={
                    QuizCategory && SelectOption
                      ? `/quiz/${category.category}/questions=${SelectOption}`
                      : "#"
                  }
                  className={`text-white hover:text-gray-300 block ${
                    QuizCategory && SelectOption ? "" : "pointer-events-none opacity-50"
                  }`}
                >
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start {category.category} quiz</button>
                </Link>
                <img src={category.Image} alt={category.category} className="w-48 h-48 object-cover mt-2 rounded" />
              </li>
            ))}
        </ul>
      </div>
    );
  }
export default QuizCategory;
    
  
  




