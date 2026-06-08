import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ member, size = 'default' }) => {
  const isLarge = size === 'large';
  
  const getSubTeamClass = (subTeam) => {
    if (!subTeam) return 'tag-default';
    const mechanicalTeams = ['Aerodesign', 'Wing', 'Tail & Stability', 'Structure', 'Propulsion'];
    const autonomousTeams = ['Computer Vision', 'Software', 'Hardware', 'Firmware'];
    
    if (mechanicalTeams.includes(subTeam)) return 'tag-mechanical';
    if (autonomousTeams.includes(subTeam)) return 'tag-autonomous';
    return 'tag-default';
  };

  const getRoleClass = (role) => {
    if (role === 'Lead') return 'role-lead';
    if (role === 'Vice Lead') return 'role-vice-lead';
    return 'role-member';
  };

  return (
    <article className={`team-member-card ${isLarge ? 'card-large' : ''}`}>
      <div className="card-content">
        
        {/* Role Badge */}
        <div className="badge-container">
          <span className={`role-badge ${getRoleClass(member.role)}`}>
            {member.role || 'Member'}
          </span>
        </div>

        {/* Profile Image or Placeholder */}
        <div className={`avatar-placeholder ${isLarge ? 'avatar-large' : ''}`}>
          {member.image ? (
            <img 
              src={member.image} 
              alt={`${member.name} profile`} 
              className="actual-profile-image"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={isLarge ? "80" : "56"} height={isLarge ? "80" : "56"} viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          )}
        </div>

        {/* Name */}
        <h3 className="member-name">
          {member.name || 'Member Name'}
        </h3>

        {/* Sub-team Tag */}
        <div className="subteam-container">
          <span className={`subteam-tag ${getSubTeamClass(member.subTeam)}`}>
            {member.subTeam || 'Department'}
          </span>
        </div>

        {/* Details */}
        <div className="member-details">
          <p>Year {member.year || '-'}</p>
          <p>{member.major || 'Engineering'}</p>
        </div>

        {/* LinkedIn Link */}
        {member.linkedIn && (
          <div className="linkedin-container">
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="linkedin-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamMemberCard;