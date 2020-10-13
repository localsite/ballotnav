-- corrects name of jurisdiction_id
DROP VIEW public.jurisdictions_with_currwip;

CREATE OR REPLACE VIEW public.jurisdictions_with_currwip AS
SELECT
	j.id AS jurisdiction_id
	, s.name AS state_name
	, j.name AS jurisdiction_name
	, u.id AS editor_user_id
	, max(wj.id) AS wip_jurisdiction_id
FROM
	jurisdiction j
	JOIN state s ON j.state_id = s.id
	LEFT JOIN wip_jurisdiction wj ON j.id = wj.jurisdiction_id
		AND (wj.edit_basis_wip_jurisdiction_id IS NULL
			AND j.wip_jurisdiction_id IS NULL
			OR wj.edit_basis_wip_jurisdiction_id IS NOT NULL
			AND j.wip_jurisdiction_id IS NOT NULL
			AND j.wip_jurisdiction_id = wj.edit_basis_wip_jurisdiction_id)
	LEFT JOIN "user" u ON wj.editor_user_id = u.id
GROUP BY
	s.name
	, j.name
	, j.id
	, u.id
ORDER BY
	s.name
	, j.name
	, u.id;

CREATE TABLE public.gis_shapes (
	id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY
	, dataset text NOT NULL
	, geo geometry(MultiPolygon , 4326) NOT NULL
	, name text
	, statefp text
	, countyfp text
	, countyns text
	, placefp text
	, placens text
	, stusps text
	, statens text
	, cousubfp text
	, cousubns text
	, zcta5ce10 text
	, CONSTRAINT gis_shapes_pkey PRIMARY KEY (id)
);

ALTER TYPE public.enum_state_jurisdiction_type
	ADD VALUE 'Region';

