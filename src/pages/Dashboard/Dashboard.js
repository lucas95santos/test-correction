import React, { useState } from 'react';
// components
import { DashboardTop } from '../../components';
// styles
import './Dashboard.css';
// icons
import { FiPlus } from 'react-icons/fi';
// tooltip
import ReactTooltip from 'react-tooltip';

export default function Dashboard(props) {
  const [profileDropdown, setProfileDropDown] = useState(false);
  const [notificationDropdown, setNotificationDropDown] = useState(false);

  function handleClickOut() {
    if (profileDropdown) {
      setProfileDropDown(false);
    }

    if (notificationDropdown) {
      setNotificationDropDown(false);
    }
  }

  return (
    <div className="dashboard" onClick={() => handleClickOut()}>
      <DashboardTop
        profileDropdownOpen={profileDropdown}
        profileDropdownOnclose={setProfileDropDown}
        notificationDropdownOpen={notificationDropdown}
        notificationDropdownOnClose={setNotificationDropDown}
        notificationAmount={0}
      />

      <div className="dashboard__content">
        <div className="card classes">
          <div className="card__title">
            <h1>Turmas</h1>
          </div>
          <div className="card__body">
            <div className="card__item" data-tip="Adicionar nova turma">
              <div className="add-sign">
                <FiPlus size={20} color="#dc7037" />
              </div>
            </div>
          </div>
        </div>
        <div className="card students">
          <div className="card__title">
            <h1>Alunos</h1>
          </div>
          <div className="card__body card__body--table">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Matrícula</th>
                  <th>Série</th>
                  <th>Turma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>2016.1907.013-8</td>
                  <td>8ª</td>
                  <td>C</td>
                </tr>

                <tr>
                  <td>John Doe</td>
                  <td>2016.1907.013-8</td>
                  <td>8ª</td>
                  <td>C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card tests">
          <div className="card__title">
            <h1>Provas</h1>
          </div>
        </div>

        <div className="card info">
          <div className="card__title">
            <h1>Outros</h1>
          </div>
        </div>
      </div>

      <ReactTooltip place="right" type="dark" effect="solid" />
    </div>
  );
}
