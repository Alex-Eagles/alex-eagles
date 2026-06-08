import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import './TeamMembersSection.css';

const TeamMembersSection = ({ members }) => {
  /* Handle empty state if no members match the filter */
  if (!members || members.length === 0) {
    return (
      <section className="empty-state">
        <p>No team members found for this filter.</p>
      </section>
    );
  }

  /* Separate leads from members */
  const leads = members.filter((m) => m.role === 'Lead' || m.role === 'Vice Lead');
  const regularMembers = members.filter((m) => m.role === 'Member');

  /* Sort leadership */
  const sortedLeads = [...leads].sort((a, b) => {
    const order = { 'Lead': 1, 'Vice Lead': 2, 'Member': 3 };
    return (order[a.role] || 4) - (order[b.role] || 4);
  });

  return (
    <section className="team-members-container">
      {/* Leadership Section */}
      {sortedLeads.length > 0 && (
        <div className="members-group">
          <div className="group-header">
            <h2>Leadership</h2>
            <div className="header-line" />
          </div>
          <div className="members-grid">
            {sortedLeads.map((member, index) => (
              <TeamMemberCard key={`lead-${index}`} member={member} size="large" />
            ))}
          </div>
        </div>
      )}

      {/* Members Section */}
      {regularMembers.length > 0 && (
        <div className="members-group">
          {sortedLeads.length > 0 && (
            <div className="group-header">
              <h2>Members</h2>
              <div className="header-line" />
            </div>
          )}
          <div className="members-grid">
            {regularMembers.map((member, index) => (
              <TeamMemberCard key={`member-${index}`} member={member} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamMembersSection;