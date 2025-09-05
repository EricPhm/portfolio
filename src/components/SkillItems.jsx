export const SkillItems = ({ name, Icon, position }) => {
    return (
        <div>
            <Icon className="h-10 w-10 mb-2 text-primary" />
            <span className="text-sm font-medium">{name}</span>
        </div>
    );
};
