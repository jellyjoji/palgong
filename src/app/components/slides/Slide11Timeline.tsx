import { Calendar, CheckCircle2, Circle } from "lucide-react";

export function Slide11Timeline() {
  const phases = [
    {
      phase: "Phase 1: Preparation",
      duration: "Week 1-2",
      color: "from-[#5B2C83] to-[#7B4CA3]",
      tasks: [
        { task: "Design and print promotional materials", status: "pending" },
        { task: "Set up mobile game and QR codes", status: "pending" },
        { task: "Train staff on event mechanics", status: "pending" },
        { task: "Create social media content calendar", status: "pending" }
      ]
    },
    {
      phase: "Phase 2: Launch",
      duration: "Week 3 (Event Day: 8th)",
      color: "from-[#FF4F8B] to-[#FF6FA3]",
      tasks: [
        { task: "Deploy in-store materials and signage", status: "pending" },
        { task: "Launch social media campaign", status: "pending" },
        { task: "Activate game and reward system", status: "pending" },
        { task: "Monitor real-time engagement", status: "pending" }
      ]
    },
    {
      phase: "Phase 3: Optimization",
      duration: "Week 4",
      color: "from-[#FFC857] to-[#FFD77A]",
      tasks: [
        { task: "Collect and analyze performance data", status: "pending" },
        { task: "Gather customer feedback", status: "pending" },
        { task: "Adjust rewards and game mechanics", status: "pending" },
        { task: "Plan improvements for next month", status: "pending" }
      ]
    }
  ];

  const monthlyCalendar = [
    { day: 1, event: "Pre-launch prep" },
    { day: 8, event: "POP TAP DAY! 🎉", highlight: true },
    { day: 15, event: "Mid-month review" },
    { day: 22, event: "SNS winner announcement" },
    { day: 30, event: "Monthly report" }
  ];

  return (
    <div className="h-full bg-white p-16 overflow-y-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-1 w-16 bg-[#5B2C83] rounded-full"></div>
          <span className="text-sm font-bold text-[#5B2C83] tracking-wider uppercase">Implementation Plan</span>
        </div>
        <h2 className="text-5xl font-bold text-gray-900">Execution Timeline</h2>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10">
        {/* Phase Cards */}
        {phases.map((phase, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#5B2C83]/30 hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${phase.color} text-white p-5`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{phase.phase}</h3>
                  <p className="text-sm opacity-90">{phase.duration}</p>
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div className="p-5 space-y-3">
              {phase.tasks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Circle className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item.task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Calendar View */}
      <div className="bg-gradient-to-br from-[#5B2C83]/5 to-[#FF4F8B]/5 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-7 h-7 text-[#5B2C83]" />
          <h3 className="text-2xl font-bold text-gray-900">Monthly Event Calendar</h3>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {monthlyCalendar.map((item, index) => (
            <div 
              key={index}
              className={`${
                item.highlight 
                  ? 'bg-gradient-to-br from-[#FF4F8B] to-[#FF6FA3] text-white shadow-xl scale-105' 
                  : 'bg-white border-2 border-gray-200 text-gray-900'
              } rounded-xl p-5 transition-all hover:shadow-lg`}
            >
              <div className={`text-3xl font-bold mb-2 ${item.highlight ? 'text-white' : 'text-[#5B2C83]'}`}>
                {item.day}
              </div>
              <div className={`text-sm font-medium ${item.highlight ? 'text-white' : 'text-gray-600'}`}>
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Summary */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Critical Dates */}
        <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Critical Dates</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Materials Ready</span>
              <span className="font-bold text-[#5B2C83]">Day 1-7</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#FF4F8B]/10 rounded-lg border-2 border-[#FF4F8B]">
              <span className="text-sm font-medium text-gray-700">Event Day</span>
              <span className="font-bold text-[#FF4F8B]">Day 8</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Winner Announcement</span>
              <span className="font-bold text-[#5B2C83]">Day 22</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Monthly Review</span>
              <span className="font-bold text-[#5B2C83]">Day 30</span>
            </div>
          </div>
        </div>

        {/* Success Checklist */}
        <div className="bg-[#5B2C83] text-white rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-5">Pre-Launch Checklist</h3>
          <div className="space-y-3">
            {[
              "All promotional materials printed and ready",
              "QR codes tested and functional",
              "Staff trained on game and rewards",
              "Social media posts scheduled",
              "Inventory stocked (toppings, cups)",
              "Analytics tracking configured"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFC857] flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-95 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
