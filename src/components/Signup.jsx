import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-1 m-auto  max-w-auto gap">
        <h2 className="mx-auto text-black text-xl font-medium">Signup</h2>
        <p className="mx-auto text-xs">
          Sign Up to Collaborate with applicators and manage your operations.
        </p>
        <div className="grid grid-cols-1 rounded-xl shadow bg-white gap-2 mt-4">
          <div className="col-span-full mx-auto">
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                aria-hidden="true"
                className="size-12 text-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 mx-auto px-10 pb-5 pt-5 gap-x-10 gap-y-5">
            <div className="flex flex-col">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-[10px] font-normal text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-[10px] font-normal text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-[10px] font-normal text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-[10px] font-normal text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-[10px] font-normal text-gray-900"
                >
                  Password
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-[10px] font-normal text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <div className="flex items-center rounded-sm bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 ">
                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter Name"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mb-10 ml-10 gap-x-3">
            <button
              type="button"
              className="px-1 py-1 text-sm text-white focus:outline-none"
            >
              Change
            </button>

            <a className="text-sm text-black underline mt-4">Cancel</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
