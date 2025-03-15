import { useState } from 'react';
import { motion } from 'framer-motion';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of frontend development experience',
      'Strong understanding of modern JavaScript and React ecosystem'
    ],
    available: true
  },
  {
    id: 2,
    title: 'Backend Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hybrid',
    skills: ['Node.js', 'Python', 'PostgreSQL'],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of backend development experience',
      'Experience with RESTful APIs and microservices'
    ],
    available: false
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'On-site',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
    qualifications: [
      'Bachelor\'s degree in Design or related field',
      '3+ years of UI/UX design experience',
      'Strong portfolio demonstrating web and mobile design'
    ],
    available: true
  }
];

const departments = [...new Set(jobOpenings.map(job => job.department))];
const locations = [...new Set(jobOpenings.map(job => job.location))];

export default function Careers() {
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    available: false
  });

  const filteredJobs = jobOpenings.filter(job => {
    if (filters.department && job.department !== filters.department) return false;
    if (filters.location && job.location !== filters.location) return false;
    if (filters.available && !job.available) return false;
    return true;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 mb-8">
            Help us shape the future of technology. We're always looking for talented individuals to join our team.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="form-select rounded-md border-gray-300 shadow-sm"
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              className="form-select rounded-md border-gray-300 shadow-sm"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option value="">All Locations</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox rounded text-primary-600"
                checked={filters.available}
                onChange={(e) => setFilters({ ...filters, available: e.target.checked })}
              />
              <span>Show only available positions</span>
            </label>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <div className="mt-2 space-x-4">
                    <span className="text-gray-600">{job.department}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">{job.location}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">{job.type}</span>
                  </div>
                </div>
                {!job.available && (
                  <span className="px-3 py-1 text-sm text-yellow-700 bg-yellow-100 rounded-full">
                    Currently Unavailable
                  </span>
                )}
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm text-primary-600 bg-primary-50 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Qualifications:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`btn ${job.available ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                disabled={!job.available}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
