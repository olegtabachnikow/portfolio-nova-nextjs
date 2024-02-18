import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Skills.module.css';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { SkillListType } from '@/types/types';
import { SkillList } from '@/constants/constants';
import Image from 'next/image';
import SkillsButton from '../SkillsButton/SkillsButton';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setIsBurgerMenuOpen, setIsStarted } from '@/redux/interface-slice';
import { setCameraPosition } from '@/redux/nova-slice';

const Skills: FC = () => {
  const [currentSelectedSkill, setCurrentSelectedSkill] =
    useState<SkillListType>(SkillList[0]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNavigation = (link: '/projects' | '/contact') => {
    dispatch(setIsBurgerMenuOpen(false));
    dispatch(setIsStarted(false));
    dispatch(setCameraPosition({ x: 0, y: 0, z: 0 }));
    const timeout = setTimeout(() => {
      router.push(`/${i18n.language}${link}`);
    }, 700);
    return () => clearTimeout(timeout);
  };

  return (
    <CardContentWrapper>
      <span className={classes.title}>{t('skills.title')}</span>
      <div className={classes.skills_box}>
        {SkillList.map((skill) => (
          <Image
            onClick={() => setCurrentSelectedSkill(skill)}
            key={skill.title}
            className={`${classes.skill} ${
              skill.title === currentSelectedSkill.title && classes.active
            }`}
            src={skill.image}
            width={50}
            height={50}
            alt={skill.title}
          />
        ))}
      </div>
      <span className={classes.skill_title}>{currentSelectedSkill.title}</span>
      <div
        className={classes.buttons}
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
        }}
      >
        <SkillsButton
          text={t('menu.projects')}
          onClick={() => handleNavigation('/projects')}
        />
        <SkillsButton
          text={t('menu.contact')}
          onClick={() => handleNavigation('/contact')}
        />
      </div>
    </CardContentWrapper>
  );
};

export default Skills;
