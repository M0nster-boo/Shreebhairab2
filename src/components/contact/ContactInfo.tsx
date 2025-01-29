import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-300">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-200">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium text-purple-100">Location</p>
                  <p className="text-gray-300">123 Music Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium text-purple-100">Email</p>
                  <p className="text-gray-300">contact@awesomeband.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="font-medium text-purple-100">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
