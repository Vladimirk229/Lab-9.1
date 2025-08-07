import type { UserProfileCardProps } from '../../types';

//===============================
export const UserProfileCard = (props: UserProfileCardProps) => {
  const { user, showEmail, showRole, onEdit, children } = props;

  return (
    <div className="p-4 border rounded shadow text-center">
      {/* Avatar */}
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="mx-auto rounded-full w-16 h-16 mb-2"
        />
      )}

      {/* Name */}
      <h2 className="text-lg font-semibold">{user.name}</h2>

      {/* Optional: Email */}
      {showEmail && <p>{user.email}</p>}

      {/* Optional: Role */}
      {showRole && <p>{user.role}</p>}

      {/* Optional: Edit button */}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">
          Edit Profile
        </button>
      )}

      {/* Optional: children */}
      {children}
    </div>
  );
};
