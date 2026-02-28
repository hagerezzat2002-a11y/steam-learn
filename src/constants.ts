
import { Level, SteamProject } from './types';

export const LEVELS: Level[] = [
  {
    id: 'arduino-1',
    type: 'arduino',
    name: { en: 'Arduino Basics', ar: 'أساسيات الأردوينو' },
    description: { en: 'Introduction to the Arduino board and its parts.', ar: 'مقدمة للوحة الأردوينو وأجزائها.' },
    lessons: [
      {
        id: 'a1-l1',
        title: { en: 'What is Arduino?', ar: 'ما هو الأردوينو؟' },
        content: { 
          en: 'Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of a physical programmable circuit board (microcontroller) and software (IDE) to write and upload code.',
          ar: 'الأردوينو هو منصة إلكترونية مفتوحة المصدر تعتمد على أجهزة وبرامج سهلة الاستخدام. يتكون من لوحة دوائر مادية قابلة للبرمجة (متحكم دقيق) وبرنامج (IDE) لكتابة ورفع الكود.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a1-l2',
        title: { en: 'The Brain: Microcontroller', ar: 'العقل: المتحكم الدقيق' },
        content: { 
          en: 'The black chip in the middle (usually ATmega328P) is the brain. it executes the instructions you write in your code. It processes inputs and controls outputs.',
          ar: 'الشريحة السوداء في المنتصف (غالباً ATmega328P) هي العقل. تقوم بتنفيذ التعليمات التي تكتبها في الكود الخاص بك. تعالج المدخلات وتتحكم في المخرجات.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a1-l3',
        title: { en: 'Powering the Board', ar: 'تزويد اللوحة بالطاقة' },
        content: { 
          en: 'You can power Arduino via:\n1. USB Port: Connects to your computer and provides 5V.\n2. Power Jack: Connects to a battery or wall adapter (7V-12V).\n3. Vin Pin: For direct voltage input.',
          ar: 'يمكنك تزويد الأردوينو بالطاقة عبر:\n1. منفذ USB: يتصل بالكمبيوتر ويوفر 5 فولت.\n2. مقبس الطاقة: يتصل ببطارية أو محول حائط (7-12 فولت).\n3. دبوس Vin: لإدخال الجهد المباشر.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: { en: 'Which part is considered the "brain" of Arduino?', ar: 'أي جزء يعتبر "عقل" الأردوينو؟' },
        options: { 
          en: ['USB Port', 'Microcontroller', 'LED', 'Reset Button'],
          ar: ['منفذ USB', 'المتحكم الدقيق', 'LED', 'زر إعادة الضبط']
        },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'arduino-2',
    type: 'arduino',
    name: { en: 'Pins and Connections', ar: 'الدبابيس والتوصيلات' },
    description: { en: 'Learn about Digital, Analog, and Power pins.', ar: 'تعرف على الدبابيس الرقمية والتناظرية ودبابيس الطاقة.' },
    lessons: [
      {
        id: 'a2-l1',
        title: { en: 'Digital Pins (0-13)', ar: 'الدبابيس الرقمية (0-13)' },
        content: { 
          en: 'Digital pins can be either INPUT or OUTPUT. They only have two states: HIGH (5V) or LOW (0V). Pins with a tilde (~) support PWM.',
          ar: 'الدبابيس الرقمية يمكن أن تكون مدخلات أو مخرجات. لها حالتان فقط: مرتفع (5 فولت) أو منخفض (0 فولت). الدبابيس التي تحمل علامة (~) تدعم PWM.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a2-l2',
        title: { en: 'Analog Pins (A0-A5)', ar: 'الدبابيس التناظرية (A0-A5)' },
        content: { 
          en: 'Analog pins read variable signals from sensors. They convert voltage (0-5V) into a number between 0 and 1023.',
          ar: 'تستخدم الدبابيس التناظرية لقراءة الإشارات المتغيرة من الحساسات. تقوم بتحويل الجهد (0-5 فولت) إلى رقم بين 0 و 1023.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a2-l3',
        title: { en: 'Power Pins', ar: 'دبابيس الطاقة' },
        content: { 
          en: 'GND is Ground (0V). 5V and 3.3V provide power to components. IOREF provides the voltage reference for the board.',
          ar: 'GND هو الأرضي (0 فولت). 5V و 3.3V توفر الطاقة للمكونات. IOREF يوفر مرجع الجهد للوحة.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'q3',
        question: { en: 'What is the range of values for an analog read?', ar: 'ما هو نطاق القيم للقراءة التناظرية؟' },
        options: { 
          en: ['0-255', '0-512', '0-1023', '0-5'],
          ar: ['0-255', '0-512', '0-1023', '0-5']
        },
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'arduino-3',
    type: 'arduino',
    name: { en: 'Programming Basics', ar: 'أساسيات البرمجة' },
    description: { en: 'Learn how to write code for Arduino.', ar: 'تعلم كيفية كتابة الكود للأردوينو.' },
    lessons: [
      {
        id: 'a3-l1',
        title: { en: 'Code Structure', ar: 'هيكل الكود' },
        content: { 
          en: 'setup() runs once. loop() runs forever. This is the basic structure of every Arduino program.',
          ar: 'setup() تعمل مرة واحدة. loop() تعمل للأبد. هذا هو الهيكل الأساسي لكل برنامج أردوينو.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a3-l2',
        title: { en: 'Variables', ar: 'المتغيرات' },
        content: { 
          en: 'int for integers, float for decimals, bool for true/false. Variables are like boxes that store information.',
          ar: 'int للأعداد الصحيحة، float للأعداد العشرية، bool لصحيح/خطأ. المتغيرات تشبه الصناديق التي تخزن المعلومات.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a3-l3',
        title: { en: 'If Statements', ar: 'جمل الشرط' },
        content: { 
          en: 'Use "if" to make decisions based on conditions. For example: if (light < 100) { turnOnLED(); }',
          ar: 'استخدم "if" لاتخاذ القرارات بناءً على الشروط. مثال: إذا كان الضوء أقل من 100، قم بتشغيل الـ LED.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'q5',
        question: { en: 'Which function runs repeatedly?', ar: 'أي دالة تعمل بشكل متكرر؟' },
        options: { 
          en: ['setup()', 'loop()', 'start()', 'main()'],
          ar: ['setup()', 'loop()', 'start()', 'main()']
        },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'arduino-4',
    type: 'arduino',
    name: { en: 'Communication & PWM', ar: 'الاتصال والـ PWM' },
    description: { en: 'Talk to your computer and simulate analog output.', ar: 'تحدث إلى جهاز الكمبيوتر الخاص بك وحاكي المخرجات التناظرية.' },
    lessons: [
      {
        id: 'a4-l1',
        title: { en: 'Serial Monitor', ar: 'الشاشة التسلسلية' },
        content: { 
          en: 'Serial.begin(9600) starts communication. Serial.println() sends data to your screen.',
          ar: 'Serial.begin(9600) يبدأ الاتصال. Serial.println() يرسل البيانات إلى شاشتك.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a4-l2',
        title: { en: 'PWM Basics', ar: 'أساسيات PWM' },
        content: { 
          en: 'PWM pins (marked with ~) can output values from 0 to 255 using analogWrite().',
          ar: 'دبابيس PWM (المميزة بـ ~) يمكنها إخراج قيم من 0 إلى 255 باستخدام analogWrite().'
        },
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a4-l3',
        title: { en: 'Digital Input', ar: 'المدخلات الرقمية' },
        content: { 
          en: 'digitalRead() reads the state of a button (HIGH or LOW). Use pull-up resistors for stability.',
          ar: 'digitalRead() يقرأ حالة الزر (مرتفع أو منخفض). استخدم مقاومات الرفع للاستقرار.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'q6',
        question: { en: 'Which command sends data to the computer?', ar: 'أي أمر يرسل البيانات إلى الكمبيوتر؟' },
        options: { 
          en: ['digitalWrite', 'analogRead', 'Serial.println', 'delay'],
          ar: ['digitalWrite', 'analogRead', 'Serial.println', 'delay']
        },
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'arduino-5',
    type: 'arduino',
    name: { en: 'Sensors & Actuators', ar: 'الحساسات والمحركات' },
    description: { en: 'Interact with the physical world.', ar: 'التفاعل مع العالم المادي.' },
    lessons: [
      {
        id: 'a5-l1',
        title: { en: 'Ultrasonic Sensor', ar: 'حساس المسافة' },
        content: { 
          en: 'Measures distance by sending sound waves and timing the echo. Used in robots to avoid obstacles.',
          ar: 'يقيس المسافة عن طريق إرسال موجات صوتية وتوقيت الصدى. يستخدم في الروبوتات لتجنب العقبات.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1558444458-5cd00bb12ee1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a5-l2',
        title: { en: 'Servo Motors', ar: 'محركات السيرفو' },
        content: { 
          en: 'Servos can rotate to a specific angle (0-180 degrees). Perfect for robot arms and steering.',
          ar: 'يمكن للسيرفو الدوران إلى زاوية محددة (0-180 درجة). مثالي لأذرع الروبوت والتوجيه.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'a5-l3',
        title: { en: 'PIR Motion Sensor', ar: 'حساس الحركة PIR' },
        content: { 
          en: 'Detects infrared heat from moving objects like humans or animals. Used in security systems.',
          ar: 'يكشف الحرارة تحت الحمراء من الأجسام المتحركة مثل البشر أو الحيوانات. يستخدم في أنظمة الأمان.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'q7',
        question: { en: 'What is the rotation range of a standard servo?', ar: 'ما هو مدى دوران السيرفو القياسي؟' },
        options: { 
          en: ['0-90', '0-180', '0-360', 'Infinite'],
          ar: ['0-90', '0-180', '0-360', 'لانهاية']
        },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'circuit-1',
    type: 'circuit',
    name: { en: 'Circuit Fundamentals', ar: 'أساسيات الدوائر' },
    description: { en: 'Learn how electricity flows.', ar: 'تعلم كيف يتدفق التيار الكهربائي.' },
    lessons: [
      {
        id: 'c1-l1',
        title: { en: 'What is a Circuit?', ar: 'ما هي الدائرة الكهربائية؟' },
        content: { 
          en: 'A circuit is a closed loop. Electricity flows from positive to negative. If the path is broken, current stops.',
          ar: 'الدائرة الكهربائية هي حلقة مغلقة. تتدفق الكهرباء من الموجب إلى السالب. إذا انكسر المسار، يتوقف التيار.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c1-l2',
        title: { en: 'Voltage (V)', ar: 'الجهد (V)' },
        content: { 
          en: 'Voltage is the electrical pressure. Think of it like water pressure in a pipe. Measured in Volts.',
          ar: 'الجهد هو الضغط الكهربائي. فكر فيه مثل ضغط الماء في الأنبوب. يقاس بالفولت.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c1-l3',
        title: { en: 'Current (I)', ar: 'التيار (I)' },
        content: { 
          en: 'Current is the flow of electrons. Think of it like the amount of water flowing. Measured in Amperes.',
          ar: 'التيار هو تدفق الإلكترونات. فكر فيه مثل كمية الماء المتدفقة. يقاس بالأمبير.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'cq1',
        question: { en: 'What is the unit of Current?', ar: 'ما هي وحدة قياس التيار؟' },
        options: { 
          en: ['Volt', 'Ampere', 'Ohm', 'Watt'],
          ar: ['فولت', 'أمبير', 'أوم', 'واط']
        },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'circuit-2',
    type: 'circuit',
    name: { en: 'Electronic Components', ar: 'المكونات الإلكترونية' },
    description: { en: 'Meet the building blocks of circuits.', ar: 'تعرف على لبنات بناء الدوائر.' },
    lessons: [
      {
        id: 'c2-l1',
        title: { en: 'The Resistor', ar: 'المقاومة' },
        content: { 
          en: 'Resistors limit current. They protect LEDs from burning out. Measured in Ohms (Ω).',
          ar: 'المقاومات تحد من التيار. تحمي الـ LEDs من الاحتراق. تقاس بالأوم (Ω).'
        },
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c2-l2',
        title: { en: 'The LED', ar: 'الـ LED' },
        content: { 
          en: 'LEDs emit light. Long leg is positive (Anode), short leg is negative (Cathode).',
          ar: 'الـ LEDs تبعث الضوء. الساق الطويلة موجبة (Anode)، والساق القصيرة سالبة (Cathode).'
        },
        imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c2-l3',
        title: { en: 'The Breadboard', ar: 'لوحة التجارب' },
        content: { 
          en: 'Used for prototyping. Rows are connected horizontally, power rails vertically.',
          ar: 'تستخدم للنماذج الأولية. الصفوف متصلة أفقياً، وقضبان الطاقة عمودياً.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'cq2',
        question: { en: 'Which leg of an LED is positive?', ar: 'أي ساق في الـ LED هي الموجبة؟' },
        options: { 
          en: ['Short', 'Long', 'Both', 'Neither'],
          ar: ['القصيرة', 'الطويلة', 'كلاهما', 'لا شيء']
        },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'circuit-3',
    type: 'circuit',
    name: { en: 'Advanced Components', ar: 'مكونات متقدمة' },
    description: { en: 'Learn about capacitors, transistors, and diodes.', ar: 'تعرف على المكثفات، الترانزستورات، والدايودات.' },
    lessons: [
      {
        id: 'c3-l1',
        title: { en: 'The Capacitor', ar: 'المكثف' },
        content: { 
          en: 'Stores electrical energy. Used to filter noise and stabilize power.',
          ar: 'يخزن الطاقة الكهربائية. يستخدم لتصفية الضوضاء وتثبيت الطاقة.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1558444458-5cd00bb12ee1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c3-l2',
        title: { en: 'The Transistor', ar: 'الترانزستور' },
        content: { 
          en: 'An electronic switch. Small current controls a large current.',
          ar: 'مفتاح إلكتروني. تيار صغير يتحكم في تيار كبير.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c3-l3',
        title: { en: 'The Diode', ar: 'الدايود' },
        content: { 
          en: 'Allows current to flow in one direction only. Protects circuits from reverse polarity.',
          ar: 'يسمح للتيار بالتدفق في اتجاه واحد فقط. يحمي الدوائر من القطبية العكسية.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'cq4',
        question: { en: 'Which component acts as a switch?', ar: 'أي مكون يعمل كمفتاح؟' },
        options: { 
          en: ['Resistor', 'Transistor', 'Capacitor', 'Diode'],
          ar: ['مقاومة', 'ترانزستور', 'مكثف', 'دايود']
        },
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'circuit-4',
    type: 'circuit',
    name: { en: 'Circuit Laws', ar: 'قوانين الدوائر' },
    description: { en: 'The math behind electronics.', ar: 'الرياضيات وراء الإلكترونيات.' },
    lessons: [
      {
        id: 'c4-l1',
        title: { en: "Ohm's Law", ar: 'قانون أوم' },
        content: { 
          en: 'V = I * R. Voltage equals Current times Resistance. The most important law in electronics.',
          ar: 'V = I * R. الجهد يساوي التيار مضروباً في المقاومة. أهم قانون في الإلكترونيات.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c4-l2',
        title: { en: 'Series Circuits', ar: 'دوائر التوالي' },
        content: { 
          en: 'Components are in a single path. Current is the same everywhere. Total resistance adds up.',
          ar: 'المكونات في مسار واحد. التيار هو نفسه في كل مكان. المقاومة الكلية تجمع.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c4-l3',
        title: { en: 'Parallel Circuits', ar: 'دوائر التوازي' },
        content: { 
          en: 'Components have multiple paths. Voltage is the same across all branches.',
          ar: 'المكونات لها مسارات متعددة. الجهد هو نفسه عبر جميع الفروع.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'cq5',
        question: { en: "What is Ohm's Law formula?", ar: 'ما هي صيغة قانون أوم؟' },
        options: { 
          en: ['V = I + R', 'V = I / R', 'V = I * R', 'I = V * R'],
          ar: ['V = I + R', 'V = I / R', 'V = I * R', 'I = V * R']
        },
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'circuit-5',
    type: 'circuit',
    name: { en: 'Tools & Schematics', ar: 'الأدوات والمخططات' },
    description: { en: 'How to build and test.', ar: 'كيفية البناء والاختبار.' },
    lessons: [
      {
        id: 'c5-l1',
        title: { en: 'The Multimeter', ar: 'الملتيميتر' },
        content: { 
          en: 'A tool to measure Voltage, Current, and Resistance. Essential for troubleshooting.',
          ar: 'أداة لقياس الجهد والتيار والمقاومة. ضرورية لاكتشاف الأخطاء.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c5-l2',
        title: { en: 'Schematic Symbols', ar: 'رموز المخططات' },
        content: { 
          en: 'Learn the symbols for resistors, LEDs, and batteries to read circuit diagrams.',
          ar: 'تعلم رموز المقاومات والـ LEDs والبطاريات لقراءة مخططات الدوائر.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'c5-l3',
        title: { en: 'Soldering Basics', ar: 'أساسيات اللحام' },
        content: { 
          en: 'Joining components permanently using heat and solder. Used for final projects.',
          ar: 'ربط المكونات بشكل دائم باستخدام الحرارة واللحام. يستخدم للمشاريع النهائية.'
        },
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    quiz: [
      {
        id: 'cq6',
        question: { en: 'What tool measures voltage?', ar: 'ما هي الأداة التي تقيس الجهد؟' },
        options: { 
          en: ['Oscilloscope', 'Multimeter', 'Breadboard', 'Battery'],
          ar: ['أوسيلوسكوب', 'ملتيميتر', 'لوحة تجارب', 'بطارية']
        },
        correctAnswer: 1
      }
    ]
  }
];

export const STEAM_PROJECTS: SteamProject[] = [
  {
    id: 'p1',
    title: { en: 'Blinking LED', ar: 'وميض LED' },
    description: { en: 'The "Hello World" of Arduino.', ar: 'مشروع "مرحباً بالعالم" في الأردوينو.' },
    difficulty: 'easy',
    materials: {
      en: ['Arduino Uno', 'LED', '220 Ohm Resistor', 'Breadboard', 'Jumper Wires'],
      ar: ['أردوينو أونو', 'LED', 'مقاومة 220 أوم', 'لوحة تجارب', 'أسلاك توصيل']
    },
    steps: {
      en: [
        'Connect the LED long leg to Pin 13.',
        'Connect the short leg to GND through a resistor.',
        'Upload the Blink sketch from Examples.'
      ],
      ar: [
        'قم بتوصيل الساق الطويلة للـ LED بالدبوس 13.',
        'قم بتوصيل الساق القصيرة بالأرضي (GND) عبر مقاومة.',
        'ارفع كود Blink من الأمثلة.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    title: { en: 'Traffic Light', ar: 'إشارة المرور' },
    description: { en: 'Simulate a real traffic light system.', ar: 'محاكاة نظام إشارة مرور حقيقي.' },
    difficulty: 'easy',
    materials: {
      en: ['Arduino', 'Red, Yellow, Green LEDs', '3x 220 Ohm Resistors', 'Wires'],
      ar: ['أردوينو', 'LED أحمر، أصفر، أخضر', '3 مقاومات 220 أوم', 'أسلاك']
    },
    steps: {
      en: [
        'Connect LEDs to pins 10, 11, and 12.',
        'Write code to turn them on in sequence.',
        'Add delays for each color.'
      ],
      ar: [
        'قم بتوصيل الـ LEDs بالدبابيس 10، 11، 12.',
        'اكتب كوداً لتشغيلها بالتتابع.',
        'أضف تأخيراً زمنياً لكل لون.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1515233254143-3f6516109968?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    title: { en: 'Smart Plant Monitor', ar: 'مراقب النبات الذكي' },
    description: { en: 'Check if your plant needs water.', ar: 'تحقق مما إذا كان نباتك يحتاج للماء.' },
    difficulty: 'medium',
    materials: {
      en: ['Arduino', 'Soil Moisture Sensor', 'Buzzer', 'Battery'],
      ar: ['أردوينو', 'حساس رطوبة التربة', 'طنان (Buzzer)', 'بطارية']
    },
    steps: {
      en: [
        'Insert sensor into the soil.',
        'Connect sensor to Analog pin A0.',
        'Code the buzzer to sound when soil is dry.'
      ],
      ar: [
        'اغرس الحساس في التربة.',
        'وصل الحساس بالدبوس التناظري A0.',
        'برمج الطنان ليصدر صوتاً عندما تكون التربة جافة.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1585336139118-132f70e456ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p4',
    title: { en: 'Distance Radar', ar: 'رادار المسافة' },
    description: { en: 'Measure distance using sound waves.', ar: 'قياس المسافة باستخدام الموجات الصوتية.' },
    difficulty: 'medium',
    materials: {
      en: ['Arduino', 'Ultrasonic Sensor (HC-SR04)', 'Wires', 'Ruler'],
      ar: ['أردوينو', 'حساس فوق صوتي (HC-SR04)', 'أسلاك', 'مسطرة']
    },
    steps: {
      en: [
        'Connect VCC and GND to Arduino.',
        'Connect Trig and Echo to digital pins.',
        'Calculate distance based on sound travel time.'
      ],
      ar: [
        'وصل VCC و GND بالأردوينو.',
        'وصل Trig و Echo بالدبابيس الرقمية.',
        'احسب المسافة بناءً على وقت سفر الصوت.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1558444458-5cd00bb12ee1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p5',
    title: { en: 'Digital Thermometer', ar: 'ميزان حرارة رقمي' },
    description: { en: 'Read temperature and humidity.', ar: 'قراءة درجة الحرارة والرطوبة.' },
    difficulty: 'medium',
    materials: {
      en: ['Arduino', 'DHT11 Sensor', 'LCD Screen', 'Resistor'],
      ar: ['أردوينو', 'حساس DHT11', 'شاشة LCD', 'مقاومة']
    },
    steps: {
      en: [
        'Connect DHT11 to digital pin 2.',
        'Connect LCD to I2C pins.',
        'Display temperature values on the screen.'
      ],
      ar: [
        'وصل DHT11 بالدبوس الرقمي 2.',
        'وصل الشاشة بدبابيس I2C.',
        'اعرض قيم الحرارة على الشاشة.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p6',
    title: { en: 'Waving Robot Hand', ar: 'يد روبوت تلوح' },
    description: { en: 'Control a servo motor.', ar: 'التحكم في محرك سيرفو.' },
    difficulty: 'easy',
    materials: {
      en: ['Arduino', 'Servo Motor', 'Cardboard', 'Glue'],
      ar: ['أردوينو', 'محرك سيرفو', 'كرتون', 'صمغ']
    },
    steps: {
      en: [
        'Attach a cardboard hand to the servo.',
        'Connect servo to pin 9.',
        'Use the Sweep example to make it wave.'
      ],
      ar: [
        'ثبت يداً كرتونية على المحرك.',
        'وصل المحرك بالدبوس 9.',
        'استخدم مثال Sweep لجعله يلوح.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p7',
    title: { en: 'Automatic Night Light', ar: 'ضوء ليلي تلقائي' },
    description: { en: 'Turns on when it gets dark.', ar: 'يعمل تلقائياً عندما يحل الظلام.' },
    difficulty: 'easy',
    materials: {
      en: ['Arduino', 'LDR (Light Sensor)', 'LED', '10k Ohm Resistor'],
      ar: ['أردوينو', 'حساس ضوء (LDR)', 'LED', 'مقاومة 10 كيلو أوم']
    },
    steps: {
      en: [
        'Create a voltage divider with LDR.',
        'Read light level on pin A0.',
        'Turn on LED if light level is low.'
      ],
      ar: [
        'اصنع مقسم جهد باستخدام الحساس.',
        'اقرأ مستوى الضوء على الدبوس A0.',
        'شغل الـ LED إذا كان مستوى الضوء منخفضاً.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p8',
    title: { en: 'LED Dimmer', ar: 'خافت إضاءة LED' },
    description: { en: 'Control brightness with a knob.', ar: 'التحكم في السطوع باستخدام مقبض.' },
    difficulty: 'easy',
    materials: {
      en: ['Arduino', 'Potentiometer', 'LED', 'Wires'],
      ar: ['أردوينو', 'مقاومة متغيرة', 'LED', 'أسلاك']
    },
    steps: {
      en: [
        'Connect potentiometer to A0.',
        'Map the 0-1023 input to 0-255 output.',
        'Use analogWrite to dim the LED.'
      ],
      ar: [
        'وصل المقاومة المتغيرة بـ A0.',
        'حول المدخلات (0-1023) إلى مخرجات (0-255).',
        'استخدم analogWrite لخفت الـ LED.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p9',
    title: { en: 'Intruder Alarm', ar: 'إنذار الدخلاء' },
    description: { en: 'Detect motion in your room.', ar: 'كشف الحركة في غرفتك.' },
    difficulty: 'medium',
    materials: {
      en: ['Arduino', 'PIR Motion Sensor', 'Buzzer', 'LED'],
      ar: ['أردوينو', 'حساس حركة PIR', 'طنان', 'LED']
    },
    steps: {
      en: [
        'Connect PIR sensor to pin 2.',
        'Wait for sensor to stabilize.',
        'Trigger alarm when motion is detected.'
      ],
      ar: [
        'وصل حساس الحركة بالدبوس 2.',
        'انتظر حتى يستقر الحساس.',
        'فعل الإنذار عند كشف أي حركة.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p10',
    title: { en: 'LCD Greeting Bot', ar: 'روبوت التحية LCD' },
    description: { en: 'Display custom messages.', ar: 'عرض رسائل مخصصة.' },
    difficulty: 'medium',
    materials: {
      en: ['Arduino', '16x2 LCD Display', 'Potentiometer', 'Wires'],
      ar: ['أردوينو', 'شاشة LCD 16x2', 'مقاومة متغيرة', 'أسلاك']
    },
    steps: {
      en: [
        'Connect LCD pins to Arduino.',
        'Adjust contrast with potentiometer.',
        'Use LiquidCrystal library to print text.'
      ],
      ar: [
        'وصل دبابيس الشاشة بالأردوينو.',
        'اضبط التباين بالمقاومة المتغيرة.',
        'استخدم مكتبة LiquidCrystal لطباعة النص.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p11',
    title: { en: 'Joystick LED Control', ar: 'تحكم LED بعصا التحكم' },
    description: { en: 'Move light with a joystick.', ar: 'تحريك الضوء باستخدام عصا التحكم.' },
    difficulty: 'medium',
    materials: {
      en: ['Arduino', 'Joystick Module', '4x LEDs', 'Wires'],
      ar: ['أردوينو', 'وحدة عصا التحكم', '4 LEDs', 'أسلاك']
    },
    steps: {
      en: [
        'Connect X and Y axes to A0 and A1.',
        'Map joystick movement to LED pins.',
        'Light up LEDs based on direction.'
      ],
      ar: [
        'وصل محوري X و Y بـ A0 و A1.',
        'اربط حركة العصا بدبابيس الـ LEDs.',
        'أضئ الـ LEDs بناءً على الاتجاه.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p12',
    title: { en: 'Remote Control Fan', ar: 'مروحة تحكم عن بعد' },
    description: { en: 'Use a TV remote to cool down.', ar: 'استخدم ريموت التلفزيون للتبريد.' },
    difficulty: 'hard',
    materials: {
      en: ['Arduino', 'IR Receiver', 'DC Motor', 'Transistor'],
      ar: ['أردوينو', 'مستقبل IR', 'محرك DC', 'ترانزستور']
    },
    steps: {
      en: [
        'Decode your remote signals.',
        'Connect motor via a transistor circuit.',
        'Toggle motor state with remote buttons.'
      ],
      ar: [
        'فك تشفير إشارات الريموت.',
        'وصل المحرك عبر دائرة ترانزستور.',
        'شغل وأطفئ المحرك بأزرار الريموت.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1591130901020-ef93581c446c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p13',
    title: { en: 'Mini Electric Car', ar: 'سيارة كهربائية صغيرة' },
    description: { en: 'Build a basic moving robot.', ar: 'بناء روبوت متحرك بسيط.' },
    difficulty: 'hard',
    materials: {
      en: ['Arduino', 'L298N Motor Driver', '2x DC Motors', 'Chassis'],
      ar: ['أردوينو', 'تعريف محركات L298N', 'محركين DC', 'هيكل سيارة']
    },
    steps: {
      en: [
        'Assemble the wheels and chassis.',
        'Connect motors to the driver.',
        'Program movement patterns (forward, turn).'
      ],
      ar: [
        'جمع العجلات والهيكل.',
        'وصل المحركات بالتعريف.',
        'برمج أنماط الحركة (للأمام، دوران).'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p14',
    title: { en: 'Keypad Secret Lock', ar: 'قفل سري بلوحة مفاتيح' },
    description: { en: 'Protect your treasures.', ar: 'احمِ كنوزك.' },
    difficulty: 'hard',
    materials: {
      en: ['Arduino', '4x4 Keypad', 'Servo Motor', 'Buzzer'],
      ar: ['أردوينو', 'لوحة مفاتيح 4x4', 'محرك سيرفو', 'طنان']
    },
    steps: {
      en: [
        'Connect keypad to 8 digital pins.',
        'Define a secret password in code.',
        'Unlock the servo if password is correct.'
      ],
      ar: [
        'وصل لوحة المفاتيح بـ 8 دبابيس رقمية.',
        'حدد كلمة مرور سرية في الكود.',
        'افتح السيرفو إذا كانت كلمة المرور صحيحة.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p15',
    title: { en: 'Solar Sun Tracker', ar: 'متتبع الشمس الشمسي' },
    description: { en: 'Follow the light automatically.', ar: 'تتبع الضوء تلقائياً.' },
    difficulty: 'hard',
    materials: {
      en: ['Arduino', '2x LDRs', 'Servo Motor', 'Solar Panel'],
      ar: ['أردوينو', 'حساسين LDR', 'محرك سيرفو', 'لوح شمسي']
    },
    steps: {
      en: [
        'Place LDRs on sides of a divider.',
        'Compare light levels between LDRs.',
        'Rotate servo to face the brighter side.'
      ],
      ar: [
        'ضع حساسين LDR على جانبي فاصل.',
        'قارن مستويات الضوء بين الحساسين.',
        'دور السيرفو ليواجه الجانب الأكثر سطوعاً.'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-fe5bb5848d22?auto=format&fit=crop&w=800&q=80'
  }
];
