import useTitle from "../Hooks/useTitle";

const Support = () => {
  useTitle("Support - Gamehub");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Support
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">How do I install games/apps?</h3>
                  <p className="text-gray-300">
                    Click on the install button on any game or app page. Make
                    sure you're logged in.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">
                    Can I download multiple items?
                  </h3>
                  <p className="text-gray-300">
                    Yes, you can install as many as you want. Check your
                    installed page to manage them.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
              <p className="mb-4">
                If you can't find what you're looking for, contact our support
                team.
              </p>
              <button className="btn bg-purple-600 hover:bg-purple-700 text-white">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
