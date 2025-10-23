import { useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";

export default function ProfileUpdatePage() {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  function handleProfileUpdate() {}
  return (
    <>
      <title>Game Matrix - Update Profile</title>
      <section className="flex items-center justify-center py-14">
        <div className="card bg-base-200 w-full max-w-md shrink-0 items-center justify-center border border-gray-800">
          <div className="card-body w-full max-w-md">
            <h2 className="text-center text-2xl font-semibold">
              Update profile info
            </h2>
            <form onSubmit={handleProfileUpdate}>
              <fieldset className="fieldset">
                {/* Name  */}
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input w-full placeholder:text-gray-100/20"
                  placeholder="Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />

                {/* Photo URl  */}
                <label htmlFor="photo" className="label">
                  Photo URL{" "}
                </label>
                <input
                  name="photo"
                  id="photo"
                  type="text"
                  className="input w-full placeholder:text-gray-100/20"
                  placeholder="Photo URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  required
                />

                <button type="submit" className="btn btn-primary mt-2">
                  <MdOutlineUpdate /> Update Profile
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
