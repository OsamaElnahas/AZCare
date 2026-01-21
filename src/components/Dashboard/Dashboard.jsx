import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  Search,
  Bell,
  User,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Stethoscope,
  AlertCircle,
  Plus,
  QrCode,
  Calendar,
  ChevronDown,
  Trash2,
  Upload,
  ChartArea,
} from "lucide-react";
import StatCard from "../StatCard/StatCard";
import PatientCard from "../PatientCard/PatientCard";
export default function Dashboard() {
  const recentPatients = [
    {
      id: "4186151515",
      name: "Muhammad Hammad",
      gender: "Male",
      age: 56,
      visits: 3,
    },
    {
      id: "9876543210",
      name: "Fatima Al-Zahra",
      gender: "Female",
      age: 34,
      visits: 5,
    },
    {
      id: "8765432109",
      name: "Omar Khattab",
      gender: "Male",
      age: 29,
      visits: 2,
    },
    {
      id: "7654321098",
      name: "Mariam Mansour",
      gender: "Female",
      age: 42,
      visits: 10,
    },
    {
      id: "1154377098",
      name: "Ahmed Ibrahim",
      gender: "Male",
      age: 50,
      visits: 1,
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h2>
        <p className="text-gray-500">
          The Ministry of Hajj appreciates your effort
        </p>
      </div>

      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ChartArea size={30} className="text-gray-800" />
          <h3 className="text-xl font-bold text-gray-800">Overview</h3>
        </div>
        <div className="grid lg:grid-cols-4 gap-4">
          <StatCard title="Total Patients" value="371" change="9.2%" />
          <StatCard title="Routine Checkups" value="200" change="7.2%" />
          <StatCard title="Doctor Consultations" value="113" change="9.2%" />
          <StatCard
            title="Emergency Cases"
            value="58"
            change="0.2%"
            isNegative
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={20} className="text-gray-800" />
          <h3 className="text-xl font-bold text-gray-800">Recent Patients</h3>
          <span className="text-sm text-gray-500">in the past 24 Hours</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {recentPatients.map((patient, idx) => (
            <PatientCard key={idx} patient={patient} />
          ))}
        </div>
      </div>
    </div>
  );
}
