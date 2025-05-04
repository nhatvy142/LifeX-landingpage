import { createClient } from "contentful"

// Check if required environment variables are available
const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

// Sample data for development when Contentful is not available
const sampleNewsArticles = [
  {
    sys: { id: "news1" },
    fields: {
      title: "Breakthrough in Earable Computing Technology",
      slug: "breakthrough-earable-computing",
      date: "2023-05-15T00:00:00.000Z",
      author: "Dr. Jane Smith",
      category: "Research",
      excerpt:
        "LifeX Labs announces a major breakthrough in earable computing technology that can monitor cognitive states with unprecedented accuracy.",
      featuredImage: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          },
        },
      },
      content: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "LifeX Labs is excited to announce a major breakthrough in earable computing technology. Our team has developed a new ear-based wearable device that can monitor cognitive states with unprecedented accuracy using advanced EEG and PPG sensors.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "The new device, called NeuroBuds, can detect changes in attention, cognitive load, and stress levels in real-time. This breakthrough has significant implications for cognitive enhancement, mental health monitoring, and productivity optimization.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "heading-3",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Key Features",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "unordered-list",
            data: {},
            content: [
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "High-precision EEG and PPG sensors",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Real-time cognitive state monitoring",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Low power consumption for all-day use",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "On-device AI processing for enhanced privacy",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "This breakthrough is the result of three years of intensive research and development by our multidisciplinary team of neuroscientists, engineers, and data scientists. Clinical trials are set to begin next month, with commercial applications expected within the next two years.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      tags: ["Wearable Technology", "AI", "Cognitive Health", "Research"],
    },
  },
  {
    sys: { id: "news2" },
    fields: {
      title: "LifeX Labs Secures $10M Grant for Cognitive Enhancement Research",
      slug: "lifex-secures-grant",
      date: "2023-07-22T00:00:00.000Z",
      author: "Dr. Michael Chen",
      category: "Funding",
      excerpt:
        "The National Institutes of Health awards LifeX Labs a $10 million grant to advance research in non-invasive cognitive enhancement technologies.",
      featuredImage: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          },
        },
      },
      content: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "LifeX Labs is proud to announce that we have been awarded a $10 million grant from the National Institutes of Health (NIH) to advance our research in non-invasive cognitive enhancement technologies.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "This grant will fund a five-year research program focused on developing and validating drug-free interventions for improving cognitive function, with particular emphasis on attention, memory, and executive function.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "heading-3",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Research Goals",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "The research program will explore various non-invasive stimulation modalities, including transcranial direct current stimulation (tDCS), binaural beats, and visual entrainment. The team will also investigate the synergistic effects of combining these modalities with adaptive cognitive training.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  '"This grant represents a significant vote of confidence in our approach to cognitive enhancement," said Dr. Michael Chen, Principal Investigator of the research program. "We\'re excited to push the boundaries of what\'s possible in non-invasive cognitive intervention."',
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      tags: ["Funding", "Cognitive Enhancement", "Research Grant", "NIH"],
    },
  },
  {
    sys: { id: "news3" },
    fields: {
      title: "New Partnership Aims to Revolutionize Sleep Quality Monitoring",
      slug: "sleep-quality-partnership",
      date: "2023-09-05T00:00:00.000Z",
      author: "Dr. Sarah Johnson",
      category: "Partnership",
      excerpt:
        "LifeX Labs announces strategic partnership with SleepTech Inc. to develop next-generation sleep monitoring and enhancement technologies.",
      featuredImage: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          },
        },
      },
      content: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "LifeX Labs is pleased to announce a strategic partnership with SleepTech Inc., a leader in consumer sleep technology. This collaboration aims to develop next-generation solutions for monitoring and enhancing sleep quality using our advanced biosensing and AI technologies.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Poor sleep affects millions of people worldwide and is linked to numerous health issues, including reduced cognitive performance, impaired immune function, and increased risk of chronic diseases. By combining LifeX Labs' expertise in biosignal processing and earable computing with SleepTech's consumer products and market reach, we aim to create more effective, non-invasive solutions for improving sleep quality.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "heading-3",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Partnership Goals",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "The partnership will focus on three main areas:",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "ordered-list",
            data: {},
            content: [
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Developing more accurate sleep stage detection using ear-based sensors",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Creating personalized sleep optimization interventions using audio and vibration",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Building AI models to predict optimal sleep timing and duration based on individual biomarkers",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      tags: ["Partnership", "Sleep Technology", "Health Tech", "Wearables"],
    },
  },
]

const samplePeople = [
  {
    sys: { id: "person1" },
    fields: {
      name: "Dr. Emily Carter",
      slug: "emily-carter",
      role: "Chief Scientist & Co-Founder",
      shortBio:
        "Pioneering researcher in wearable EEG technology with over 15 years of experience in cognitive neuroscience.",
      photo: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
          },
        },
      },
      biography: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Dr. Emily Carter is the Chief Scientist and Co-Founder of LifeX Labs. She has dedicated her career to developing innovative technologies for monitoring and enhancing cognitive function. With a Ph.D. in Cognitive Neuroscience from Stanford University and postdoctoral training at MIT, Dr. Carter brings exceptional expertise in brain-computer interfaces and wearable biosensing technologies.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Prior to founding LifeX Labs, Dr. Carter led the Cognitive Enhancement Division at Neurotech Research Institute, where she pioneered several breakthrough technologies in non-invasive brain stimulation. Her work has been published in leading journals including Nature Neuroscience, Proceedings of the National Academy of Sciences, and IEEE Transactions on Biomedical Engineering.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "At LifeX Labs, Dr. Carter leads a multidisciplinary team of neuroscientists, engineers, and data scientists working to develop the next generation of wearable technologies for cognitive health. Her current research focuses on ear-based biosensing technologies for monitoring and enhancing brain function in everyday settings.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      email: "emily.carter@lifexlabs.org",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      googleScholar: "https://scholar.google.com/",
      publications: [
        {
          fields: {
            title: "Continuous monitoring of cognitive states using ear-EEG: A validation study",
            authors: "Carter, E., Zhang, L., & Patel, S.",
            journal: "IEEE Transactions on Biomedical Engineering, 39(4), 432-440",
            abstract:
              "This study validates the accuracy of an ear-based electroencephalography (EEG) system for continuous monitoring of cognitive states in real-world settings.",
            doi: "10.1109/TBME.2022.1234567",
          },
        },
        {
          fields: {
            title: "Non-invasive cognitive enhancement using transcranial alternating current stimulation",
            authors: "Carter, E., Johnson, M., & Wilson, R.",
            journal: "Nature Neuroscience, 25(3), 289-301",
            abstract:
              "This paper demonstrates the efficacy of personalized transcranial alternating current stimulation protocols for enhancing working memory performance in healthy adults.",
            doi: "10.1038/nn.2023.5678",
          },
        },
      ],
    },
  },
  {
    sys: { id: "person2" },
    fields: {
      name: "Dr. Robert Chen",
      slug: "robert-chen",
      role: "Director of AI Research",
      shortBio:
        "Leading expert in AI-driven health analytics with a focus on developing algorithms for biosignal processing and pattern recognition.",
      photo: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
          },
        },
      },
      biography: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Dr. Robert Chen serves as the Director of AI Research at LifeX Labs, where he leads the development of advanced machine learning algorithms for health monitoring and cognitive enhancement. He holds a Ph.D. in Computer Science from Carnegie Mellon University, with a specialization in machine learning and biomedical signal processing.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Before joining LifeX Labs, Dr. Chen was a Senior Research Scientist at Google Health, where he developed AI systems for medical imaging analysis and patient outcome prediction. His work has been recognized with multiple awards, including the ACM SIGKDD Dissertation Award and the IEEE EMBS Early Career Achievement Award.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "At LifeX Labs, Dr. Chen's team focuses on developing robust, efficient algorithms for on-device AI processing of biosignals. His current research interests include federated learning for privacy-preserving health analytics, reinforcement learning for adaptive cognitive interventions, and interpretable AI for healthcare applications.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      email: "robert.chen@lifexlabs.org",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      publications: [
        {
          fields: {
            title: "EdgeHealth: A framework for on-device health monitoring with privacy guarantees",
            authors: "Chen, R., Patel, M., & Gupta, A.",
            journal: "Proceedings of the 35th Conference on Neural Information Processing Systems, 2022-2034",
            abstract:
              "This paper presents a novel framework for performing health analytics directly on edge devices, preserving user privacy while enabling powerful monitoring capabilities.",
            doi: "10.5555/3495724.3496213",
          },
        },
        {
          fields: {
            title: "Deep reinforcement learning for adaptive cognitive training",
            authors: "Chen, R., Lopez, J., & Carter, E.",
            journal: "IEEE Journal of Biomedical and Health Informatics, 27(2), 103-115",
            abstract:
              "This study demonstrates the effectiveness of deep reinforcement learning algorithms in personalizing cognitive training interventions based on real-time performance and physiological signals.",
            doi: "10.1109/JBHI.2022.3211234",
          },
        },
      ],
    },
  },
  {
    sys: { id: "person3" },
    fields: {
      name: "Dr. Sophia Kim",
      slug: "sophia-kim",
      role: "Head of Clinical Research",
      shortBio:
        "Board-certified neurologist specializing in cognitive enhancement and non-pharmacological interventions for neurological conditions.",
      photo: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
          },
        },
      },
      biography: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Dr. Sophia Kim leads the Clinical Research division at LifeX Labs, overseeing the design and implementation of clinical trials to validate our cognitive monitoring and enhancement technologies. She received her M.D. from Johns Hopkins University School of Medicine and completed her neurology residency and cognitive neuroscience fellowship at Massachusetts General Hospital.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "With board certifications in both Neurology and Clinical Neurophysiology, Dr. Kim brings valuable clinical expertise to our research and development processes. Her clinical background enables LifeX Labs to design technologies that address real-world neurological and cognitive challenges while ensuring rigorous scientific validation.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Dr. Kim's research interests include non-pharmacological interventions for cognitive enhancement, early detection of neurodegenerative conditions, and technology-assisted cognitive rehabilitation. She has published extensively on these topics in journals such as Neurology, JAMA Neurology, and Alzheimer's & Dementia.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      email: "sophia.kim@lifexlabs.org",
      phone: "+1 (603) 555-7890",
      office: "Research Building B, Room 305",
      linkedin: "https://www.linkedin.com/",
      googleScholar: "https://scholar.google.com/",
      publications: [
        {
          fields: {
            title: "Wearable technology for early detection of cognitive decline: A longitudinal study",
            authors: "Kim, S., Roberts, A., & Patel, V.",
            journal: "JAMA Neurology, 78(6), 712-723",
            abstract:
              "This longitudinal study demonstrates the potential of wearable technology to detect subtle changes in cognitive function before clinical symptoms appear.",
            doi: "10.1001/jamaneurol.2021.0903",
          },
        },
        {
          fields: {
            title: "Non-invasive neuromodulation for cognitive enhancement in healthy aging",
            authors: "Kim, S., Carter, E., & Johnson, T.",
            journal: "Neurology, 96(15), 723-735",
            abstract:
              "This clinical trial evaluates the efficacy and safety of various non-invasive neuromodulation techniques for enhancing cognitive function in healthy older adults.",
            doi: "10.1212/WNL.0000000000011788",
          },
        },
      ],
    },
  },
  {
    sys: { id: "person4" },
    fields: {
      name: "James Wilson",
      slug: "james-wilson",
      role: "Head of Engineering",
      shortBio:
        "Experienced hardware engineer with expertise in designing wearable devices and low-power electronics for health applications.",
      photo: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
          },
        },
      },
      biography: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "James Wilson leads the Engineering team at LifeX Labs, overseeing the development of our wearable hardware platforms and embedded systems. He holds an M.S. in Electrical Engineering from MIT and has over 15 years of experience in designing medical devices and consumer electronics.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Before joining LifeX Labs, James was the Director of Hardware Engineering at Fitbit, where he led the development of multiple generations of fitness trackers and smartwatches. He has also held senior engineering positions at Apple and Medtronic, contributing to the development of groundbreaking consumer and medical devices.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "At LifeX Labs, James and his team focus on creating miniaturized, energy-efficient devices that can comfortably be worn for extended periods while capturing high-quality biosignals. His expertise in designing for manufacturability ensures that our innovations can be reliably produced at scale.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      email: "james.wilson@lifexlabs.org",
      phone: "+1 (603) 555-1234",
      office: "Engineering Building, Room 202",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
]

const sampleProjects = [
  {
    sys: { id: "project1" },
    fields: {
      title: "NeuroBuds: Earable Computing for Cognitive Monitoring",
      slug: "neurobuds",
      category: "Wearable Technology",
      shortDescription:
        "Developing advanced ear-based wearables with integrated EEG and physiological sensors for continuous cognitive state monitoring.",
      featuredImage: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
        },
      },
      startDate: "2021-03-01T00:00:00.000Z",
      endDate: "2024-02-28T00:00:00.000Z",
      teamMembers: [{ sys: { id: "person1" } }, { sys: { id: "person2" } }, { sys: { id: "person4" } }],
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "The NeuroBuds project is developing a new generation of ear-based wearable devices that can continuously monitor cognitive states and physiological parameters. By integrating miniaturized EEG, PPG, and IMU sensors into a comfortable form factor, NeuroBuds aims to provide unprecedented insights into cognitive function throughout daily life.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "heading-3",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Project Goals",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "unordered-list",
            data: {},
            content: [
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Develop a comfortable, ear-based wearable with integrated biosensors",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Create algorithms for real-time cognitive state classification",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Validate the technology in laboratory and real-world settings",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Demonstrate applications in cognitive enhancement and health monitoring",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "The NeuroBuds project has successfully completed its initial prototyping phase and is currently in clinical validation. Preliminary results show promising accuracy in detecting cognitive states such as attention, cognitive load, and fatigue.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      status: "In Progress",
      fundingSources: ["National Science Foundation", "LifeX Labs Internal Funding"],
      collaborators: ["University of California, San Diego", "MIT Media Lab"],
    },
  },
  {
    sys: { id: "project2" },
    fields: {
      title: "MindSync: Adaptive Neurofeedback for Cognitive Enhancement",
      slug: "mindsync",
      category: "Cognitive Enhancement",
      shortDescription:
        "Creating personalized neurofeedback protocols that adapt in real-time based on brain activity to optimize cognitive performance.",
      featuredImage: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
        },
      },
      startDate: "2022-01-15T00:00:00.000Z",
      endDate: "2024-07-31T00:00:00.000Z",
      teamMembers: [{ sys: { id: "person1" } }, { sys: { id: "person3" } }],
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "MindSync is developing advanced neurofeedback protocols that continuously adapt to an individual's brain activity patterns to optimize cognitive performance. Unlike traditional neurofeedback approaches that use fixed protocols, MindSync employs reinforcement learning algorithms to personalize the intervention in real-time.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "heading-3",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Key Innovations",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "unordered-list",
            data: {},
            content: [
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Real-time adaptation of neurofeedback parameters based on brain responses",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Integration of multiple feedback modalities (audio, visual, haptic)",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Personalized protocol development based on individual cognitive profiles",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Long-term tracking of cognitive performance improvements",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "Initial clinical trials with the MindSync system have shown significant improvements in attention and working memory compared to traditional neurofeedback approaches. The project is currently expanding its scope to include applications for stress management and cognitive aging.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      status: "In Progress",
      fundingSources: ["National Institutes of Health", "LifeX Labs Internal Funding"],
      collaborators: ["Stanford Neuroscience Institute", "UC Berkeley"],
    },
  },
  {
    sys: { id: "project3" },
    fields: {
      title: "SleepOptimize: AI-Driven Sleep Enhancement",
      slug: "sleep-optimize",
      category: "Sleep Technology",
      shortDescription:
        "Developing personalized interventions to improve sleep quality using audio stimulation and circadian rhythm optimization.",
      featuredImage: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1585129819171-80b926762eaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          },
        },
      },
      startDate: "2022-05-01T00:00:00.000Z",
      endDate: "2024-04-30T00:00:00.000Z",
      teamMembers: [{ sys: { id: "person2" } }, { sys: { id: "person3" } }, { sys: { id: "person4" } }],
      description: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "SleepOptimize is developing a comprehensive system for enhancing sleep quality through personalized, non-pharmacological interventions. The project combines advanced sleep monitoring with AI-driven interventions that adapt to individual sleep patterns and needs.",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "heading-3",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Research Components",
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: "unordered-list",
            data: {},
            content: [
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Development of accurate sleep stage detection using earable sensors",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value: "Creation of personalized audio stimulation protocols for enhancing slow-wave sleep",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Implementation of AI algorithms to predict optimal sleep timing based on circadian rhythms",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                      {
                        nodeType: "text",
                        value:
                          "Integration with other cognitive enhancement technologies to optimize the sleep-cognition relationship",
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value:
                  "The SleepOptimize project is currently in the clinical validation phase, with preliminary results showing significant improvements in sleep efficiency and next-day cognitive performance in study participants.",
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
      status: "In Progress",
      fundingSources: ["SleepTech Inc. Partnership", "LifeX Labs Internal Funding"],
      collaborators: ["SleepTech Inc.", "Harvard Medical School Division of Sleep Medicine"],
    },
  },
]

// Create a client only if both space ID and access token are available
export const client =
  spaceId && accessToken
    ? createClient({
        space: spaceId,
        accessToken: accessToken,
      })
    : null

// Helper function to check if client is initialized
function ensureClient() {
  if (!client) {
    console.error("Contentful client not initialized. Missing environment variables.")
    return false
  }
  return true
}

export async function getNews(limit = 10) {
  try {
    if (!ensureClient()) {
      console.log("Using sample news data")
      return sampleNewsArticles.slice(0, limit)
    }

    const response = await client.getEntries({
      content_type: "newsArticle",
      order: "-fields.date",
      limit,
    })
    return response.items
  } catch (error) {
    console.error("Error fetching news:", error)
    console.log("Falling back to sample news data")
    return sampleNewsArticles.slice(0, limit)
  }
}

export async function getNewsArticle(slug: string) {
  try {
    if (!ensureClient()) {
      console.log(`Using sample news data for slug: ${slug}`)
      return sampleNewsArticles.find((article) => article.fields.slug === slug) || null
    }

    const response = await client.getEntries({
      content_type: "newsArticle",
      "fields.slug": slug,
      limit: 1,
    })
    return response.items[0] || null
  } catch (error) {
    console.error(`Error fetching news article with slug ${slug}:`, error)
    console.log("Falling back to sample news data")
    return sampleNewsArticles.find((article) => article.fields.slug === slug) || null
  }
}

export async function getPeople(limit = 100) {
  try {
    if (!ensureClient()) {
      console.log("Using sample people data")
      return samplePeople.slice(0, limit)
    }

    const response = await client.getEntries({
      content_type: "person",
      order: "fields.name",
      limit,
    })
    return response.items
  } catch (error) {
    console.error("Error fetching people:", error)
    console.log("Falling back to sample people data")
    return samplePeople.slice(0, limit)
  }
}

export async function getPerson(slug: string) {
  try {
    if (!ensureClient()) {
      console.log(`Using sample people data for slug: ${slug}`)
      return samplePeople.find((person) => person.fields.slug === slug) || null
    }

    const response = await client.getEntries({
      content_type: "person",
      "fields.slug": slug,
      limit: 1,
    })
    return response.items[0] || null
  } catch (error) {
    console.error(`Error fetching person with slug ${slug}:`, error)
    console.log("Falling back to sample people data")
    return samplePeople.find((person) => person.fields.slug === slug) || null
  }
}

export async function getProjects(limit = 100) {
  try {
    if (!ensureClient()) {
      console.log("Using sample projects data")
      return sampleProjects.slice(0, limit)
    }

    const response = await client.getEntries({
      content_type: "project",
      order: "-fields.startDate",
      limit,
    })
    return response.items
  } catch (error) {
    console.error("Error fetching projects:", error)
    console.log("Falling back to sample projects data")
    return sampleProjects.slice(0, limit)
  }
}

export async function getProject(slug: string) {
  try {
    if (!ensureClient()) {
      console.log(`Using sample projects data for slug: ${slug}`)
      return sampleProjects.find((project) => project.fields.slug === slug) || null
    }

    const response = await client.getEntries({
      content_type: "project",
      "fields.slug": slug,
      limit: 1,
    })
    return response.items[0] || null
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error)
    console.log("Falling back to sample projects data")
    return sampleProjects.find((project) => project.fields.slug === slug) || null
  }
}
