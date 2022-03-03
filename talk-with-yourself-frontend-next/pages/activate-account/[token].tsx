import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../components/Modal/Modal';
import { UserAPI } from '../../lib/api/user';

type ActivateAccountProps = {
  token: string;
};

const ActivateAccount = memo<ActivateAccountProps>(({ token }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleModalAccepted = () => {
    router.push('/auth/login');
  };

  useEffect(() => {
    dispatch(UserAPI.activateAccount(token));
  }, [dispatch, token]);

  return <Modal onAccept={handleModalAccepted} />;
});

export default ActivateAccount;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token }: any = context.params;

  return {
    props: {
      token,
    },
  };
};

ActivateAccount.displayName = 'Activate Account';
