import React, { ReactElement } from "react"
import Modal from "../Modal"
import Form, { FormSubmitProps } from "../Form";

interface AdminUserOptionsModalProps {
    username: string;
    profilePictureURL: string;
    nameInitials: string;
    bio: string;
    formSubmit: FormSubmitProps;
    adorn?: ReactElement;
}

const AdminUserOptionsModal: React.FC<AdminUserOptionsModalProps> = ({ username, bio, formSubmit, adorn, profilePictureURL, nameInitials }) => {
    return (
        <Modal openModalButtonTitle="Opções">
            <ul style={{listStyle: 'none'}} className="tile">
                <li className="menu-item">
                    <figure className="avatar avatar-xl bg-gray" data-initial={nameInitials}>
                        <img 
                            className="bg-gray"
                            src={profilePictureURL} 
                            alt={username}
                        />   
                    </figure>
                </li>
                <li className="menu-item tile-content">
                    <h3>{username}</h3>
                    <p>tipo: {adorn}</p>

                    <div style={{marginBottom: '15px'}}>
                        {bio}
                    </div>
                    
                    <div className="divider"></div>
                    <Modal
                        title={`Editar "${username}"`}
                        openModalButtonTitle="Editar"
                        openModalButtonClass="link bg-warning text-light" >
                        <Form
                            onSubmitForm={formSubmit}
                            buttonMessage="Salvar alterações"
                            fields={[
                                {label: 'Nome de usuário', name: 'username', placeholder: 'Nome de usuário', value: username},
                                {label: 'Descriçao', name: 'bio', placeholder: 'Breve descrição', value: bio},
                            ]}
                        />

                    </Modal>
                    <button style={{marginLeft: '5px'}} className="btn btn-error">Excluir</button>
                </li>
            </ul>
        </Modal>
    );
}

export default AdminUserOptionsModal;