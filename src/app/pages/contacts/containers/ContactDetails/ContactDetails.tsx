import React from 'react';

import { useViewDetailsAboutContact } from './useViewDetailsAboutContact';

export const ContactDetails = () => {
  const viewDetailsAboutContactResult = useViewDetailsAboutContact();

  if (viewDetailsAboutContactResult.isContactLoading) {
    return <div>Loading...</div>;
  }

  if ('contact' in viewDetailsAboutContactResult) {
    const {
      contact: { name, avatar, email, phone, createdAt, birthday },
    } = viewDetailsAboutContactResult;

    return (
      <>
        <div>Name: {name}</div>
        <div>Avatar: {avatar}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
        <div>Created at: {createdAt}</div>
        <div>Birth day: {birthday}</div>
      </>
    );
  }

  if ('noContactFoundMessage' in viewDetailsAboutContactResult) {
    return <div>{viewDetailsAboutContactResult.noContactFoundMessage}</div>;
  }
};
