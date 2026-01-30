import React from 'react';
import { TeamSection } from '../types';
import './Team.css';

interface TeamProps {
  data: TeamSection;
}

export const Team: React.FC<TeamProps> = ({ data }) => {
  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">{data.title}</h2>
          {data.subtitle && <p className="team-subtitle">{data.subtitle}</p>}
        </div>
        <div className="team-grid">
          {data.members.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="team-avatar-placeholder">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-bio">{member.bio}</p>
              {member.socialLinks && (
                <div className="team-social">
                  {member.socialLinks.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a 
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a 
                      href={`mailto:${member.socialLinks.email}`}
                      aria-label={`Email ${member.name}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
